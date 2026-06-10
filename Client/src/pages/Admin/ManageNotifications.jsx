import React, { useState, useEffect } from 'react';
import { FaTimes, FaEdit, FaTrash, FaPaperPlane } from 'react-icons/fa';

export const ManageNotifications = ({ email, password }) => {
  const [notifications, setNotifications] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isActive, setIsActive] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/notifications');
      const data = await res.json();
      if (Array.isArray(data)) {
        setNotifications(data);
      }
    } catch (err) {
      console.error('Failed to fetch notifications', err);
    }
  };

  const openModal = (notif = null) => {
    if (notif) {
      setEditingId(notif._id);
      setTitle(notif.title);
      setMessage(notif.message);
      setIsActive(notif.isActive);
    } else {
      setEditingId(null);
      setTitle('');
      setMessage('');
      setIsActive(true);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingId(null);
  };

  const handleSave = async () => {
    if (!title.trim() || !message.trim()) return alert('Title and message are required.');
    setIsLoading(true);
    try {
      const payload = {
        id: editingId,
        title,
        message,
        isActive,
        email,
        password
      };
      const res = await fetch('http://localhost:5000/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        fetchNotifications();
        closeModal();
      } else {
        alert(data.message || 'Failed to save');
      }
    } catch (err) {
      alert('Error saving notification');
    }
    setIsLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this notification?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/notifications/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        fetchNotifications();
      } else {
        alert('Failed to delete');
      }
    } catch (err) {
      alert('Error deleting notification');
    }
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100%' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
        <h4 className="fw-bold mb-0" style={{ color: '#0056b3' }}>Notifications Management</h4>
        <button 
          className="btn btn-primary d-flex align-items-center shadow-sm" 
          style={{ backgroundColor: '#0d6efd', border: 'none', borderRadius: '4px', padding: '8px 16px', fontWeight: '500' }}
          onClick={() => openModal()}
        >
          <span className="me-2 fw-bold" style={{ fontSize: '1.2rem', lineHeight: '1' }}>+</span> Create New Notification
        </button>
      </div>

      {/* List */}
      {notifications.length === 0 ? (
        <div className="text-center py-5 text-muted">
          <p>No notifications created yet.</p>
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {notifications.map(notif => (
            <div key={notif._id} className="card shadow-sm border-0" style={{ borderRadius: '8px', border: '1px solid #eaeaea !important' }}>
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-start mb-3">
                  <h5 className="fw-bold mb-0 text-dark">{notif.title}</h5>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-sm d-flex align-items-center justify-content-center"
                      style={{ border: '1px solid #0d6efd', color: '#0d6efd', width: '32px', height: '32px', borderRadius: '4px', backgroundColor: 'transparent' }}
                      onClick={() => openModal(notif)}
                      title="Edit"
                    >
                      <FaEdit />
                    </button>
                    <button 
                      className="btn btn-sm d-flex align-items-center justify-content-center"
                      style={{ border: '1px solid #dc3545', color: '#dc3545', width: '32px', height: '32px', borderRadius: '4px', backgroundColor: 'transparent' }}
                      onClick={() => handleDelete(notif._id)}
                      title="Delete"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
                
                <p className="text-muted mb-3" style={{ fontSize: '0.95rem' }}>{notif.message}</p>
                
                <div className="d-flex justify-content-between align-items-center pt-3 border-top" style={{ borderColor: '#f0f0f0 !important' }}>
                  <small className="text-muted">{new Date(notif.createdAt).toISOString().split('T')[0]}</small>
                  {notif.isActive ? (
                    <span className="badge" style={{ backgroundColor: '#d1e7dd', color: '#0f5132', padding: '6px 12px', borderRadius: '12px', fontWeight: 'bold' }}>ACTIVE</span>
                  ) : (
                    <span className="badge" style={{ backgroundColor: '#f8d7da', color: '#842029', padding: '6px 12px', borderRadius: '12px', fontWeight: 'bold' }}>INACTIVE</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1050,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card shadow-lg" style={{ width: '100%', maxWidth: '500px', borderRadius: '8px', border: 'none', overflow: 'hidden' }}>
            {/* Modal Header */}
            <div className="d-flex justify-content-between align-items-center p-3 px-4" style={{ backgroundColor: '#0056b3', color: 'white' }}>
              <h5 className="mb-0 fw-bold">{editingId ? 'Edit Notification' : 'Create New Notification'}</h5>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
                <FaTimes />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="p-4" style={{ backgroundColor: '#ffffff' }}>
              <div className="mb-4">
                <label className="form-label fw-bold text-dark" style={{ fontSize: '0.95rem' }}>Title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="Enter notification title"
                  style={{ borderRadius: '4px', border: '1px solid #ced4da', padding: '10px 15px' }}
                />
              </div>
              
              <div className="mb-4">
                <label className="form-label fw-bold text-dark" style={{ fontSize: '0.95rem' }}>Message</label>
                <textarea 
                  className="form-control" 
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Enter notification message"
                  rows="4"
                  style={{ borderRadius: '4px', border: '1px solid #ced4da', padding: '10px 15px', resize: 'vertical' }}
                />
              </div>

              {editingId && (
                <div className="form-check form-switch mb-4">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    id="activeSwitch"
                    checked={isActive}
                    onChange={(e) => setIsActive(e.target.checked)}
                  />
                  <label className="form-check-label fw-bold" htmlFor="activeSwitch">
                    Active (visible to users)
                  </label>
                </div>
              )}

              {/* Modal Footer */}
              <div className="d-flex justify-content-end gap-2 pt-3 border-top" style={{ borderColor: '#f0f0f0 !important' }}>
                <button className="btn text-white fw-bold" onClick={closeModal} disabled={isLoading} style={{ backgroundColor: '#6c757d', borderRadius: '4px', padding: '8px 20px' }}>Cancel</button>
                <button className="btn btn-primary d-flex align-items-center fw-bold" onClick={handleSave} disabled={isLoading} style={{ backgroundColor: '#0d6efd', border: 'none', borderRadius: '4px', padding: '8px 20px' }}>
                  <FaPaperPlane className="me-2" style={{ transform: 'rotate(45deg)' }} /> 
                  {isLoading ? 'Saving...' : (editingId ? 'Save Changes' : 'Create Notification')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
