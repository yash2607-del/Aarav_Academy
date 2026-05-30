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
// Removed Lenis/GSAP to disable smooth-scrolling/scroll-trigger animations

function App() {
  const [currentView, setCurrentView] = useState(() => {
    // Get saved view from localStorage or default to 'home'
    return localStorage.getItem('currentView') || 'home'
  })

  // Save currentView to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('currentView', currentView)
  }, [currentView])

  // Lenis/GSAP removed — no global smooth-scroll or scroll-trigger behavior

  return (
    <div className="app">
      <Navbar onNavigate={(view) => setCurrentView(view)} currentView={currentView} />

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

      <Footer onNavigate={(view) => setCurrentView(view)} compact={currentView === 'home'} />
    </div>
  )
}

export default App
