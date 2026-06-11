import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaImage, FaEdit } from 'react-icons/fa';

export const ManageAchievers = ({ email, password }) => {
  const [achievers, setAchievers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    class: '10',
    percentage: '',
    year: '2025',
    testimonial: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitError, setSubmitError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchAchievers();
  }, []);

  const fetchAchievers = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/achievers`);
      const data = await res.json();
      setAchievers(data);
    } catch (err) {
      console.error('Failed to fetch achievers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (achiever = null) => {
    setSubmitError('');
    if (achiever) {
      setEditingId(achiever._id);
      setFormData({
        name: achiever.name,
        class: achiever.class,
        percentage: achiever.percentage,
        year: achiever.year,
        testimonial: achiever.testimonial
      });
      setPreviewUrl(achiever.imageUrl?.startsWith('data:') ? achiever.imageUrl : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${achiever.imageUrl}`);
    } else {
      setEditingId(null);
      setFormData({
        name: '',
        class: '10',
        percentage: '',
        year: new Date().getFullYear().toString(),
        testimonial: ''
      });
      setPreviewUrl(null);
    }
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 2 * 1024 * 1024) {
        setSubmitError('File size must be less than 2MB');
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setSubmitError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    setIsSubmitting(true);

    if (!editingId && !selectedFile) {
      setSubmitError('Please select a picture for the achiever.');
      setIsSubmitting(false);
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('class', formData.class);
    data.append('percentage', formData.percentage);
    data.append('year', formData.year);
    data.append('testimonial', formData.testimonial);
    data.append('email', email);
    data.append('password', password);
    
    if (selectedFile) {
      data.append('pic', selectedFile);
    }

    try {
      const url = editingId 
        ? `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/achievers/${editingId}`
        : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/achievers`;
      
      const method = editingId ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        body: data
      });

      const result = await res.json();

      if (result.success) {
        setIsModalOpen(false);
        fetchAchievers();
      } else {
        setSubmitError(result.message || 'Failed to save achiever');
      }
    } catch (err) {
      setSubmitError('Server connection error. Please ensure backend is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to remove this achiever?')) return;
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/achievers/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        fetchAchievers();
      } else {
        alert(data.message || 'Failed to delete');
      }
    } catch (err) {
      alert('Error deleting achiever');
    }
  };

  return (
    <div>
      <div className="card shadow-sm p-4" style={{ borderRadius: '15px', border: 'none' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1" style={{ color: '#276eb9' }}>Manage Achievers</h4>
            <p className="text-muted mb-0">Add and update successful students shown on the homepage.</p>
          </div>
          <button 
            className="btn btn-primary d-flex align-items-center px-4 py-2"
            style={{ borderRadius: '10px', background: '#276eb9', border: 'none', fontWeight: '500' }}
            onClick={() => handleOpenModal()}
          >
            <FaPlus className="me-2" /> Add Achiever
          </button>
        </div>

        {loading ? (
          <div className="text-center py-5"><div className="spinner-border text-primary" role="status"></div></div>
        ) : achievers.length === 0 ? (
          <div className="text-center py-5 bg-light" style={{ borderRadius: '15px' }}>
            <FaImage className="text-muted mb-3" style={{ fontSize: '3rem' }} />
            <h5 className="text-muted">No Achievers Yet</h5>
            <p className="text-muted mb-0">Click the "Add Achiever" button to create your first record.</p>
          </div>
        ) : (
          <div className="row g-4">
            {achievers.map((achiever) => (
              <div key={achiever._id} className="col-lg-3 col-md-4 col-sm-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', overflow: 'hidden', border: '2px solid #eef2f6' }}>
                  <div style={{ height: '210px', backgroundColor: '#e9ecef', position: 'relative' }}>
                    <img 
                      src={achiever.imageUrl?.startsWith('data:') ? achiever.imageUrl : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${achiever.imageUrl}`} 
                      alt={achiever.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
                    />
                  </div>
                  <div className="card-body text-center p-3">
                    <h6 className="fw-bold mb-1 text-truncate">{achiever.name}</h6>
                    <span className="badge bg-primary mb-2">Class {achiever.class} | {achiever.percentage}%</span>
                    <p className="text-muted small mb-3 fst-italic" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      "{achiever.testimonial}"
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-sm btn-outline-primary w-50" onClick={() => handleOpenModal(achiever)} style={{ borderRadius: '8px' }}>
                        <FaEdit /> Edit
                      </button>
                      <button className="btn btn-sm btn-outline-danger w-50" onClick={() => handleDelete(achiever._id)} style={{ borderRadius: '8px' }}>
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div 
          className="modal fade show d-block" 
          tabIndex="-1" 
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content shadow-lg" style={{ borderRadius: '20px', border: 'none', backgroundColor: '#ffffff' }}>
                <div className="modal-header border-0 px-4 pt-4 pb-0">
                  <h5 className="modal-title fw-bold" style={{ color: '#276eb9' }}>
                    {editingId ? 'Edit Achiever' : 'Add New Achiever'}
                  </h5>
                  <button type="button" className="btn-close" onClick={() => setIsModalOpen(false)}></button>
                </div>
                <div className="modal-body p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      {/* Image Upload Column */}
                      <div className="col-md-5">
                        <label className="form-label fw-bold text-muted small text-uppercase">Picture</label>
                        <div 
                          className="border rounded position-relative mb-2 d-flex align-items-center justify-content-center" 
                          style={{ height: '240px', backgroundColor: '#f8f9fa', overflow: 'hidden', borderStyle: 'dashed !important' }}
                        >
                          {previewUrl ? (
                            <img src={previewUrl} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                          ) : (
                            <div className="text-center text-muted">
                              <FaImage style={{ fontSize: '2rem', marginBottom: '10px' }} />
                              <div className="small">No image selected</div>
                            </div>
                          )}
                        </div>
                        <input 
                          type="file" 
                          className="form-control form-control-sm" 
                          accept="image/*"
                          onChange={handleFileChange}
                          id="picUpload"
                        />
                        <small className="text-muted d-block mt-1" style={{ fontSize: '0.75rem' }}>
                          Recommended: Portrait image (3:4 ratio). Max 2MB.
                        </small>
                      </div>

                      {/* Form Fields Column */}
                      <div className="col-md-7">
                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted small text-uppercase">Name of Candidate</label>
                          <input 
                            type="text" 
                            className="form-control" 
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            required 
                            placeholder="e.g. Sambhavi"
                          />
                        </div>

                        <div className="row mb-3">
                          <div className="col-6">
                            <label className="form-label fw-bold text-muted small text-uppercase">Class</label>
                            <select 
                              className="form-select"
                              value={formData.class}
                              onChange={e => setFormData({...formData, class: e.target.value})}
                            >
                              <option value="10">Class 10</option>
                              <option value="12">Class 12</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <label className="form-label fw-bold text-muted small text-uppercase">Percentage (%)</label>
                            <input 
                              type="number" 
                              step="0.1"
                              className="form-control" 
                              value={formData.percentage}
                              onChange={e => setFormData({...formData, percentage: e.target.value})}
                              required 
                              placeholder="e.g. 93"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted small text-uppercase">Year</label>
                          <input 
                            type="number" 
                            className="form-control" 
                            value={formData.year}
                            onChange={e => setFormData({...formData, year: e.target.value})}
                            required 
                            placeholder="e.g. 2025"
                          />
                        </div>

                        <div className="mb-3">
                          <label className="form-label fw-bold text-muted small text-uppercase">Testimonial</label>
                          <textarea 
                            className="form-control" 
                            rows="3"
                            value={formData.testimonial}
                            onChange={e => setFormData({...formData, testimonial: e.target.value})}
                            required 
                            maxLength="200"
                            placeholder="Short quote from the student..."
                          ></textarea>
                          <small className="text-muted d-flex justify-content-end mt-1" style={{ fontSize: '0.75rem' }}>
                            {formData.testimonial.length}/200
                          </small>
                        </div>
                      </div>
                    </div>

                    {submitError && <div className="alert alert-danger mt-3 p-2">{submitError}</div>}
                    
                    <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top">
                      <button type="button" className="btn btn-light" onClick={() => setIsModalOpen(false)}>Cancel</button>
                      <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ background: '#276eb9', border: 'none' }}>
                        {isSubmitting ? 'Saving...' : 'Save Achiever'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
      )}
    </div>
  );
};
