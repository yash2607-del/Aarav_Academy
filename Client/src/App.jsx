import './index.css'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import YouTubeVideos from './pages/Youtube/YouTubeVideos'
import AboutPage from './pages/About/AboutPage'
import Stats from './pages/Stats/Stats'
import WhyChooseUs from './pages/WhyChoseUs/WhyChooseUs'
import Achievers from './pages/Achievers/Achievers'
import Gallery from './pages/Gallery/Gallery'
import FAQ from './pages/Faq/FAQ'
import Contact from './pages/contact/Contact'
import Footer from './components/Footer/Footer'
import NcertSolutions from './pages/Resources/NcertSolutions'
import Assignments from './pages/Resources/Assignments'
import SamplePapers from './pages/Resources/SamplePapers'
import TestSeries from './pages/Resources/TestSeries'
import StudyNotes from './pages/Resources/StudyNotes'
import { AdminPortal } from './pages/Admin/AdminPortal'
// Removed Lenis/GSAP to disable smooth-scrolling/scroll-trigger animations

function App() {
  const [currentView, setCurrentView] = useState(() => {
    // Get saved view from localStorage or default to 'home'
    return localStorage.getItem('currentView') || 'home'
  })

  // Save currentView to localStorage whenever it changes and scroll to top
  useEffect(() => {
    localStorage.setItem('currentView', currentView);
    window.scrollTo(0, 0);
  }, [currentView])

  // Lenis/GSAP removed — no global smooth-scroll or scroll-trigger behavior

  return (
    <div className="app">
      {currentView !== 'admin' && (
        <Navbar onNavigate={(view) => setCurrentView(view)} currentView={currentView} />
      )}

      {currentView === 'home' && (
        <>
          <Hero onNavigate={(view) => setCurrentView(view)} />
          <YouTubeVideos />
          <Stats />
          <Achievers />
          <WhyChooseUs onNavigate={(view) => setCurrentView(view)} />
          <Gallery />
          <FAQ />
          <Contact />
        </>
      )}

      {currentView === 'about' && (
        <AboutPage onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'study-notes' && (
        <StudyNotes onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'ncert-solutions' && (
        <NcertSolutions onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'assignments' && (
        <Assignments onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'sample-papers' && (
        <SamplePapers onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'test-series' && (
        <TestSeries onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView === 'admin' && (
        <AdminPortal onBackToHome={() => setCurrentView('home')} />
      )}

      {currentView !== 'admin' && (
        <Footer onNavigate={(view) => setCurrentView(view)} compact={currentView === 'home'} />
      )}
    </div>
  )
}

export default App
