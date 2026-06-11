import React, { useState } from 'react';
import { FaLock, FaBell, FaSignOutAlt, FaFolderOpen, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';
import { ManageResources } from './ManageResources';
import { ManageNotifications } from './ManageNotifications';
import { ManageVideos } from './ManageVideos';
import { ManageAchievers } from './ManageAchievers';
import { FaYoutube, FaUserGraduate } from 'react-icons/fa';
import { API_URL } from "../../config.js";

export const AdminPortal = ({ onBackToHome }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => sessionStorage.getItem('adminAuth') === 'true');
  const [email, setEmail] = useState(() => sessionStorage.getItem('adminEmail') || '');
  const [password, setPassword] = useState(() => sessionStorage.getItem('adminPassword') || '');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  
  const [activeTab, setActiveTab] = useState('resources'); // 'resources', 'notifications'

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem('adminAuth', 'true');
        sessionStorage.setItem('adminEmail', email);
        sessionStorage.setItem('adminPassword', password);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Cannot connect to server. Ensure backend is running.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container py-5 mt-5 position-relative" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button 
          type="button"
          onClick={() => onBackToHome()}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 100,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#276eb9',
            border: 'none',
            color: 'white',
            fontSize: '1.2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(39, 110, 185, 0.3)',
            transition: 'transform 0.3s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          title="Back to Home"
        >
          <FaArrowLeft />
        </button>
        <div className="card shadow-lg p-5" style={{ maxWidth: '400px', width: '100%', borderRadius: '20px', border: 'none' }}>
          <div className="text-center mb-4">
            <FaLock style={{ fontSize: '3rem', color: '#276eb9' }} />
            <h2 className="mt-3 fw-bold" style={{ color: '#276eb9' }}>Admin Access</h2>
            <p className="text-muted">Enter credentials to manage resources</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control form-control-lg" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: '10px' }}
                required
              />
            </div>
            <div className="mb-3 position-relative">
              <input 
                type={showPassword ? "text" : "password"} 
                className="form-control form-control-lg" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: '10px', paddingRight: '45px' }}
                required
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#6c757d',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {error && <div className="alert alert-danger p-2 text-center">{error}</div>}
            <button type="submit" className="btn btn-primary w-100 btn-lg" style={{ background: '#276eb9', border: 'none', borderRadius: '10px' }}>
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fc' }}>
      
      {/* Sidebar */}
      <div style={{ width: '280px', background: 'linear-gradient(180deg, #1e3c72 0%, #2a5298 100%)', color: 'white', display: 'flex', flexDirection: 'column', boxShadow: '4px 0 15px rgba(0,0,0,0.1)', zIndex: 10 }}>
        <div style={{ padding: '25px 20px', borderBottom: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center' }}>
          <button 
            type="button"
            onClick={() => onBackToHome()}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              color: 'white',
              borderRadius: '10px',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '15px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            title="Back to Website"
          >
            <FaArrowLeft />
          </button>
          <div>
            <h5 className="mb-0 fw-bold" style={{ letterSpacing: '0.5px' }}>Admin Panel</h5>
            <small style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Aarav Academy</small>
          </div>
        </div>
        
        <div style={{ flex: 1, padding: '25px 15px' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '15px', paddingLeft: '15px' }}>Menu</p>
          
          <button 
            className="btn w-100 text-start px-4 py-3 d-flex align-items-center mb-2"
            style={{ 
              backgroundColor: activeTab === 'notifications' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: 'white', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: activeTab === 'notifications' ? '600' : '400',
              transition: 'all 0.2s',
              boxShadow: activeTab === 'notifications' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            onClick={() => setActiveTab('notifications')}
            onMouseEnter={e => { if (activeTab !== 'notifications') e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { if (activeTab !== 'notifications') e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <FaBell className="me-3" style={{ fontSize: '1.1rem' }} /> Create Notification
          </button>
          
          <button 
            className="btn w-100 text-start px-4 py-3 d-flex align-items-center mb-2"
            style={{ 
              backgroundColor: activeTab === 'resources' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: 'white', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: activeTab === 'resources' ? '600' : '400',
              transition: 'all 0.2s',
              boxShadow: activeTab === 'resources' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            onClick={() => setActiveTab('resources')}
            onMouseEnter={e => { if (activeTab !== 'resources') e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { if (activeTab !== 'resources') e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <FaFolderOpen className="me-3" style={{ fontSize: '1.1rem' }} /> Manage Resources
          </button>

          <button 
            className="btn w-100 text-start px-4 py-3 d-flex align-items-center mb-4"
            style={{ 
              backgroundColor: activeTab === 'videos' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: 'white', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: activeTab === 'videos' ? '600' : '400',
              boxShadow: activeTab === 'videos' ? '0 4px 15px rgba(255, 0, 0, 0.3)' : 'none',
              transition: 'all 0.3s'
            }}
            onClick={() => setActiveTab('videos')}
            onMouseEnter={e => { if (activeTab !== 'videos') e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; }}
            onMouseLeave={e => { if (activeTab !== 'videos') e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            <FaYoutube className="me-3" style={{ fontSize: '1.2rem' }} /> Manage Videos
          </button>
          
          <button 
            className="btn w-100 text-start px-4 py-3 d-flex align-items-center mb-2"
            onClick={() => setActiveTab('achievers')}
            style={{ 
              backgroundColor: activeTab === 'achievers' ? 'rgba(255,255,255,0.2)' : 'transparent', 
              color: 'white', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: activeTab === 'achievers' ? '600' : '400',
              boxShadow: activeTab === 'achievers' ? '0 4px 15px rgba(39, 110, 185, 0.3)' : 'none',
              transition: 'all 0.3s'
            }}
          >
            <FaUserGraduate className="me-3" style={{ fontSize: '1.2rem' }} /> Manage Achievers
          </button>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0', padding: '0 15px' }}></div>

          <button 
            className="btn w-100 text-start px-4 py-3 d-flex align-items-center"
            style={{ 
              color: '#ffb3b3', 
              border: 'none', 
              backgroundColor: 'transparent',
              borderRadius: '12px',
              transition: 'all 0.2s'
            }}
            onClick={() => {
              setIsAuthenticated(false);
              sessionStorage.removeItem('adminAuth');
              sessionStorage.removeItem('adminEmail');
              sessionStorage.removeItem('adminPassword');
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,100,100,0.1)'; e.currentTarget.style.color = '#ffcccc'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#ffb3b3'; }}
          >
            <FaSignOutAlt className="me-3" style={{ fontSize: '1.1rem' }} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        {/* Top Header */}
        <div style={{ height: '80px', backgroundColor: 'white', borderBottom: '1px solid #f0f0f0', display: 'flex', alignItems: 'center', padding: '0 40px', boxShadow: '0 2px 15px rgba(0,0,0,0.03)' }}>
          <h3 className="mb-0 fw-bold" style={{ color: '#333', letterSpacing: '-0.5px' }}>
            {activeTab === 'resources' && 'Resource Management'}
            {activeTab === 'notifications' && 'Notifications Management'}
            {activeTab === 'videos' && 'YouTube Videos Management'}
            {activeTab === 'achievers' && 'Achievers Management'}
          </h3>
        </div>

        {/* Dynamic Content */}
        <div style={{ padding: '40px', flex: 1, overflowY: 'auto' }}>

          {activeTab === 'resources' && (
            <div className="card shadow-sm p-0" style={{ borderRadius: '20px', border: 'none', background: 'transparent' }}>
              <ManageResources email={email} password={password} />
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="card shadow-sm p-0" style={{ borderRadius: '20px', border: 'none', background: 'transparent' }}>
              <ManageNotifications email={email} password={password} />
            </div>
          )}

          {activeTab === 'videos' && (
            <div className="card shadow-sm p-0" style={{ borderRadius: '20px', border: 'none', background: 'transparent' }}>
              <ManageVideos email={email} password={password} />
            </div>
          )}

          {activeTab === 'achievers' && (
            <div className="card shadow-sm p-0" style={{ borderRadius: '20px', border: 'none', background: 'transparent' }}>
              <ManageAchievers email={email} password={password} />
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
