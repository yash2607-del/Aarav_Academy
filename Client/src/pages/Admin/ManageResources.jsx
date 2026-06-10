import React, { useState, useEffect } from 'react';
import { CLASSES_STRUCTURE } from '../../data/classStructure';
import { FaLock, FaSave, FaCheckCircle, FaEdit, FaTimes, FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

export const ManageResources = ({ email, password }) => {
  const [resourceType, setResourceType] = useState('study-material');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedStreamId, setSelectedStreamId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');

  const [chapters, setChapters] = useState([]);
  const [links, setLinks] = useState({});
  const [chapterNames, setChapterNames] = useState({});
  const [customChapterCount, setCustomChapterCount] = useState(null);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingChapterId, setEditingChapterId] = useState(null);
  const [editChapterName, setEditChapterName] = useState('');
  const [editDriveLink, setEditDriveLink] = useState('');
  
  const [isSaving, setIsSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const selectedClass = CLASSES_STRUCTURE.find(c => c.id === selectedClassId);
  const availableStreams = selectedClass?.streams || [];
  const availableSubjects = selectedStreamId 
    ? availableStreams.find(s => s.id === selectedStreamId)?.subjects || []
    : selectedClass?.subjects || [];

  const subject = availableSubjects.find(s => s.id === selectedSubjectId);
  const baseCount = subject?.chapterCount || 12;
  const currentCount = customChapterCount !== null ? customChapterCount : baseCount;

  useEffect(() => {
    if (selectedSubjectId) {
      fetchConfigAndLinks();
    } else {
      setChapters([]);
      setCustomChapterCount(null);
    }
  }, [selectedSubjectId, resourceType, selectedStreamId]);

  useEffect(() => {
    if (selectedSubjectId) {
      const chapterList = Array.from({ length: currentCount }, (_, i) => ({
        id: `ch${i + 1}`,
        defaultTitle: `Chapter ${i + 1}`
      }));
      setChapters(chapterList);
    }
  }, [currentCount, selectedSubjectId]);

  const fetchConfigAndLinks = async () => {
    try {
      let baseUrl = `http://localhost:5000/api/resources?resourceType=${resourceType}&classId=${selectedClassId}&subjectId=${selectedSubjectId}`;
      let configUrl = `http://localhost:5000/api/resource-config?resourceType=${resourceType}&classId=${selectedClassId}&subjectId=${selectedSubjectId}`;
      
      if (selectedStreamId) {
        baseUrl += `&streamId=${selectedStreamId}`;
        configUrl += `&streamId=${selectedStreamId}`;
      }

      const [resLinks, resConfig] = await Promise.all([
        fetch(baseUrl),
        fetch(configUrl)
      ]);

      const data = await resLinks.json();
      const configData = await resConfig.json();

      const linksMap = {};
      const namesMap = {};
      if (Array.isArray(data)) {
        data.forEach(item => {
          linksMap[item.chapterId] = item.driveLink;
          if (item.chapterName) namesMap[item.chapterId] = item.chapterName;
        });
      }
      setLinks(linksMap);
      setChapterNames(namesMap);
      
      if (configData && configData.chapterCount !== undefined && configData.chapterCount !== null) {
        setCustomChapterCount(configData.chapterCount);
      } else {
        setCustomChapterCount(null);
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  const updateChapterCount = async (newCount) => {
    try {
      const payload = {
        resourceType,
        classId: selectedClassId,
        streamId: selectedStreamId || null,
        subjectId: selectedSubjectId,
        chapterCount: newCount,
        email,
        password
      };

      const res = await fetch('http://localhost:5000/api/resource-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setCustomChapterCount(newCount);
      } else {
        alert('Failed to update chapter count');
      }
    } catch (err) {
      alert('Error updating chapter count');
    }
  };

  const openEditModal = (chapter) => {
    setEditingChapterId(chapter.id);
    setEditChapterName(chapterNames[chapter.id] || chapter.defaultTitle);
    setEditDriveLink(links[chapter.id] || '');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingChapterId(null);
  };

  const handleDeleteLink = async (chapterId) => {
    if (!window.confirm('Are you sure you want to remove the link for this chapter?')) return;
    try {
      const payload = {
        resourceType, classId: selectedClassId, streamId: selectedStreamId || null, subjectId: selectedSubjectId,
        chapterId, email, password
      };
      const res = await fetch('http://localhost:5000/api/resources', {
        method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setLinks(prev => { const n = {...prev}; delete n[chapterId]; return n; });
        setChapterNames(prev => { const n = {...prev}; delete n[chapterId]; return n; });
        setSuccessMsg('Link removed successfully!');
        setTimeout(() => setSuccessMsg(''), 3000);
      }
    } catch (err) {
      alert('Failed to delete resource');
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    setSuccessMsg('');
    try {
      const payload = {
        resourceType,
        classId: selectedClassId,
        streamId: selectedStreamId || null,
        subjectId: selectedSubjectId,
        chapterId: editingChapterId,
        chapterName: editChapterName,
        driveLink: editDriveLink,
        email,
        password
      };

      const res = await fetch('http://localhost:5000/api/resources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (data.success) {
        setSuccessMsg(`Saved successfully!`);
        setTimeout(() => setSuccessMsg(''), 3000);
        setLinks(prev => ({ ...prev, [editingChapterId]: editDriveLink }));
        setChapterNames(prev => ({ ...prev, [editingChapterId]: editChapterName }));
        closeModal();
      } else {
        alert(data.message || 'Failed to save');
      }
    } catch (err) {
      alert('Failed to save link to database');
    }
    setIsSaving(false);
  };

  return (
    <div>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-4" style={{ borderRadius: '15px', border: 'none' }}>
            <h5 className="fw-bold mb-3">Filters</h5>
            
            <div className="mb-3">
              <label className="form-label fw-bold text-muted small">Resource Type</label>
              <select className="form-select border-0 bg-light" style={{ borderRadius: '10px', padding: '10px' }} value={resourceType} onChange={e => setResourceType(e.target.value)}>
                <option value="study-material">Study Notes</option>
                <option value="ncert-notes">NCERT Solution</option>
                <option value="test-series">Test Series</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold text-muted small">Class</label>
              <select className="form-select border-0 bg-light" style={{ borderRadius: '10px', padding: '10px' }} value={selectedClassId} onChange={e => {
                setSelectedClassId(e.target.value);
                setSelectedStreamId('');
                setSelectedSubjectId('');
              }}>
                <option value="">Select Class</option>
                {CLASSES_STRUCTURE.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>
            </div>

            {availableStreams.length > 0 && (
              <div className="mb-3">
                <label className="form-label fw-bold text-muted small">Stream</label>
                <select className="form-select border-0 bg-light" style={{ borderRadius: '10px', padding: '10px' }} value={selectedStreamId} onChange={e => {
                  setSelectedStreamId(e.target.value);
                  setSelectedSubjectId('');
                }}>
                  <option value="">Select Stream</option>
                  {availableStreams.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
            )}

            {selectedClassId && (!availableStreams.length || selectedStreamId) && (
              <div className="mb-3">
                <label className="form-label fw-bold text-muted small">Subject</label>
                <select className="form-select border-0 bg-light" style={{ borderRadius: '10px', padding: '10px' }} value={selectedSubjectId} onChange={e => setSelectedSubjectId(e.target.value)}>
                  <option value="">Select Subject</option>
                  {availableSubjects.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-8">
          <div className="card shadow-sm p-4" style={{ borderRadius: '15px', border: 'none', minHeight: '400px' }}>
            
            {!selectedSubjectId ? (
              <div className="text-center text-muted mt-5">
                <FaLock style={{ fontSize: '3rem', color: '#e0e0e0', marginBottom: '1.5rem' }} />
                <h5 className="fw-bold">No Subject Selected</h5>
                <p>Please select a Class and Subject to manage its chapters and resources.</p>
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="fw-bold mb-0">Manage Chapters <span className="badge bg-primary rounded-pill ms-2">{currentCount}</span></h5>
                  <div className="d-flex gap-2">
                    <button 
                      className="btn btn-outline-danger btn-sm d-flex align-items-center"
                      onClick={() => { if(currentCount > 1) updateChapterCount(currentCount - 1); }}
                      title="Remove Last Chapter"
                    >
                      <FaMinus className="me-1" /> Remove Chapter
                    </button>
                    <button 
                      className="btn btn-primary btn-sm d-flex align-items-center"
                      onClick={() => updateChapterCount(currentCount + 1)}
                      title="Add New Chapter"
                    >
                      <FaPlus className="me-1" /> Add Chapter
                    </button>
                  </div>
                </div>

                {successMsg && (
                  <div className="alert alert-success d-flex align-items-center py-2" style={{ borderRadius: '10px' }}>
                    <FaCheckCircle className="me-2" /> {successMsg}
                  </div>
                )}
                
                <div className="row g-3">
                  {chapters.map(chapter => {
                    const currentTitle = chapterNames[chapter.id] || chapter.defaultTitle;
                    const hasLink = !!links[chapter.id];
                    const chapterNum = chapter.id.replace('ch', 'Chapter ');
                    
                    return (
                      <div key={chapter.id} className="col-md-6 col-lg-4">
                        <div 
                          className="card h-100 border-0 shadow-sm" 
                          style={{ 
                            backgroundColor: '#ffffff', 
                            border: '1px solid #eef2f7 !important', 
                            borderRadius: '16px', 
                            transition: 'all 0.3s ease', 
                            cursor: 'default' 
                          }} 
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(39, 110, 185, 0.1)';
                            e.currentTarget.style.borderColor = '#d0e1f9 !important';
                          }} 
                          onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 .125rem .25rem rgba(0,0,0,.075)';
                            e.currentTarget.style.borderColor = '#eef2f7 !important';
                          }}
                        >
                          <div className="p-4 d-flex flex-column h-100">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div style={{ maxWidth: '70%' }}>
                                <span className="badge mb-2" style={{ backgroundColor: '#eef4fc', color: '#276eb9', border: '1px solid #d0e1f9', borderRadius: '6px', padding: '5px 8px', fontSize: '0.75rem' }}>
                                  {chapterNum.toUpperCase()}
                                </span>
                                <h6 className="fw-bold text-dark text-truncate mb-0" style={{ fontSize: '1.05rem' }} title={currentTitle}>
                                  {currentTitle}
                                </h6>
                              </div>
                              <div className="d-flex flex-column gap-2 align-items-end">
                                <button 
                                  className="btn btn-sm"
                                  onClick={() => openEditModal(chapter)}
                                  style={{ backgroundColor: '#f8f9fa', color: '#276eb9', border: 'none', borderRadius: '8px', padding: '6px 10px', fontSize: '0.8rem', fontWeight: '600' }}
                                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#eef4fc'}
                                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                                >
                                  <FaEdit className="me-1" /> {hasLink ? 'Edit' : 'Add'}
                                </button>
                                {hasLink && (
                                  <button 
                                    className="btn btn-sm text-danger p-0 px-1"
                                    onClick={() => handleDeleteLink(chapter.id)}
                                    title="Remove Link"
                                    style={{ fontSize: '0.9rem', opacity: 0.7 }}
                                    onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                    onMouseLeave={e => e.currentTarget.style.opacity = 0.7}
                                  >
                                    <FaTrash />
                                  </button>
                                )}
                              </div>
                            </div>
                            <div className="mt-auto pt-2 border-top" style={{ borderColor: '#f4f6f9 !important' }}>
                              {hasLink ? (
                                <a href={links[chapter.id]} target="_blank" rel="noopener noreferrer" className="text-success d-flex align-items-center" style={{ fontSize: '0.85rem', textDecoration: 'none', fontWeight: '500' }}>
                                  <FaCheckCircle className="me-2" /> Active Link
                                </a>
                              ) : (
                                <span className="text-muted d-flex align-items-center" style={{ fontSize: '0.85rem' }}>
                                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#dee2e6', marginRight: '8px' }}></div>
                                  No content uploaded
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(3px)', zIndex: 1050,
          display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <div className="card shadow-lg" style={{ width: '100%', maxWidth: '500px', borderRadius: '20px', border: 'none', overflow: 'hidden' }}>
            <div className="d-flex justify-content-between align-items-center p-4" style={{ backgroundColor: '#276eb9', color: 'white' }}>
              <h5 className="mb-0 fw-bold d-flex align-items-center">
                <FaEdit className="me-2" /> Upload Resource for {editingChapterId.replace('ch', 'Chapter ')}
              </h5>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', color: 'white', fontSize: '1.2rem', opacity: 0.8 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.8}>
                <FaTimes />
              </button>
            </div>
            <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="mb-4">
                <label className="form-label fw-bold text-dark">Chapter Name</label>
                <input 
                  type="text" 
                  className="form-control form-control-lg border-0 shadow-sm" 
                  value={editChapterName}
                  onChange={e => setEditChapterName(e.target.value)}
                  placeholder="E.g., Number System"
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="mb-4">
                <label className="form-label fw-bold text-dark">Google Drive Link</label>
                <input 
                  type="text" 
                  className="form-control form-control-lg border-0 shadow-sm" 
                  value={editDriveLink}
                  onChange={e => setEditDriveLink(e.target.value)}
                  placeholder="https://drive.google.com/..."
                  style={{ borderRadius: '10px' }}
                />
              </div>
              <div className="d-flex justify-content-end gap-3 mt-4">
                <button className="btn text-muted fw-bold" onClick={closeModal} disabled={isSaving}>Cancel</button>
                <button className="btn btn-primary d-flex align-items-center px-4 shadow-sm" onClick={handleSave} disabled={isSaving} style={{ backgroundColor: '#276eb9', border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
                  <FaSave className="me-2" /> {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
