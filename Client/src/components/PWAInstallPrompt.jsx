import { useState, useEffect } from 'react';

function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [showUpdateBanner, setShowUpdateBanner] = useState(false);

  useEffect(() => {
    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      // Only show if user hasn't dismissed it recently
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (!dismissed || Date.now() - parseInt(dismissed) > 7 * 24 * 60 * 60 * 1000) {
        setShowInstall(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for app installed
    window.addEventListener('appinstalled', () => {
      setShowInstall(false);
      setDeferredPrompt(null);
    });

    // Listen for service worker updates
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setShowUpdateBanner(true);
              }
            });
          }
        });
      });
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setShowInstall(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowInstall(false);
    localStorage.setItem('pwa-install-dismissed', Date.now().toString());
  };

  const handleUpdate = () => {
    window.location.reload();
  };

  return (
    <>
      {/* Install Banner */}
      {showInstall && (
        <div style={styles.banner}>
          <div style={styles.bannerContent}>
            <div style={styles.bannerText}>
              <strong>📱 Install Aarav Academy</strong>
              <span style={styles.subtitle}>Get quick access from your home screen!</span>
            </div>
            <div style={styles.buttonGroup}>
              <button onClick={handleInstall} style={styles.installBtn}>
                Install
              </button>
              <button onClick={handleDismiss} style={styles.dismissBtn}>
                ✕
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Banner */}
      {showUpdateBanner && (
        <div style={{ ...styles.banner, ...styles.updateBanner }}>
          <div style={styles.bannerContent}>
            <div style={styles.bannerText}>
              <strong>🔄 Update Available</strong>
              <span style={styles.subtitle}>A new version of Aarav Academy is ready!</span>
            </div>
            <button onClick={handleUpdate} style={styles.installBtn}>
              Update Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  banner: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#1a1a2e',
    color: '#ffffff',
    padding: '12px 20px',
    zIndex: 10000,
    boxShadow: '0 -2px 10px rgba(0,0,0,0.3)',
    animation: 'slideUp 0.3s ease-out',
  },
  updateBanner: {
    backgroundColor: '#0f3460',
  },
  bannerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    gap: '12px',
    flexWrap: 'wrap',
  },
  bannerText: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  subtitle: {
    fontSize: '0.85rem',
    opacity: 0.85,
  },
  buttonGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  installBtn: {
    backgroundColor: '#e94560',
    color: '#fff',
    border: 'none',
    padding: '8px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
  },
  dismissBtn: {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.3)',
    padding: '6px 10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    lineHeight: 1,
  },
};

export default PWAInstallPrompt;
