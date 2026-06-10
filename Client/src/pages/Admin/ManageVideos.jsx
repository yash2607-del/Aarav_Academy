import React, { useState, useEffect } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

export const ManageVideos = ({ email, password }) => {
  const [videos, setVideos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/videos');
      const data = await res.json();
      setVideos(data);
    } catch (err) {
      console.error('Failed to fetch videos', err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const openEditModal = (slotId) => {
    const existing = videos.find(v => v.slotId === slotId);
    setEditingSlot(slotId);
    setEditTitle(existing ? existing.title : '');
    setEditUrl(existing ? existing.videoUrl : '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingSlot(null);
  };

  const handleUpdate = async () => {
    setIsSaving(true);
    try {
      const payload = {
        slotId: editingSlot,
        title: editTitle,
        videoUrl: editUrl,
        email,
        password
      };
      
      const res = await fetch('http://localhost:5000/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await res.json();
      if (data.success) {
        fetchVideos();
        closeModal();
      } else {
        alert(data.message || 'Failed to update video');
      }
    } catch (err) {
      alert('Error updating video');
    }
    setIsSaving(false);
  };

  const extractVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|live\/)([^#&?\/]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  return (
    <div>
      <div className="card shadow-sm p-4" style={{ borderRadius: '15px', border: 'none' }}>
        <h4 className="fw-bold mb-4" style={{ color: '#276eb9' }}>YouTube Videos Management</h4>
        <p className="text-muted mb-4">Manage the 4 video slots on your homepage.</p>

        <div className="row g-4">
          {[1, 2, 3, 4].map(slot => {
            const video = videos.find(v => v.slotId === slot) || {};
            const videoId = extractVideoId(video.videoUrl);
            const thumbUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;

            return (
              <div key={slot} className="col-md-6">
                <div className="card h-100 border-0" style={{ backgroundColor: '#f8f9fa', borderRadius: '15px', overflow: 'hidden' }}>
                  <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
                    <h6 className="mb-0 fw-bold">Slot {slot}</h6>
                    <button 
                      className="btn btn-sm btn-outline-primary"
                      onClick={() => openEditModal(slot)}
                      style={{ borderRadius: '8px' }}
                    >
                      <FaEdit className="me-1" /> Edit
                    </button>
                  </div>
                  <div className="p-3">
                    {thumbUrl ? (
                      <div className="mb-3 position-relative" style={{ borderRadius: '10px', overflow: 'hidden', aspectRatio: '16/9' }}>
                        <img src={thumbUrl} alt="Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <div className="position-absolute top-50 start-50 translate-middle">
                          <div style={{ width: '50px', height: '35px', background: 'rgba(255,0,0,0.8)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '0', height: '0', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '12px solid white' }}></div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="mb-3 d-flex align-items-center justify-content-center bg-light" style={{ borderRadius: '10px', aspectRatio: '16/9', border: '2px dashed #ccc' }}>
                        <span className="text-muted">No Video Set</span>
                      </div>
                    )}
                    <h6 className="fw-bold mb-2 text-truncate" title={video.title}>{video.title || 'Untitled'}</h6>
                    <a href={video.videoUrl || '#'} target="_blank" rel="noopener noreferrer" className="text-muted" style={{ fontSize: '0.85rem', textDecoration: 'none' }}>
                      {video.videoUrl || 'No URL provided'}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card shadow-lg" style={{ width: '100%', maxWidth: '500px', borderRadius: '15px', border: 'none' }}>
            <div className="d-flex justify-content-between align-items-center p-3" style={{ backgroundColor: '#0056b3', color: 'white', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
              <h5 className="mb-0 fw-bold">Edit Video Link</h5>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem' }}>
                <FaTimes />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-3">
                <label className="form-label fw-bold">Video Title</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  placeholder="Enter video title..."
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold">YouTube URL</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={editUrl}
                  onChange={e => setEditUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                />
              </div>
              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" onClick={closeModal} disabled={isSaving}>Cancel</button>
                <button className="btn btn-primary d-flex align-items-center" onClick={handleUpdate} disabled={isSaving} style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
                  <FaSave className="me-2" /> {isSaving ? 'Updating...' : 'Update Video'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
