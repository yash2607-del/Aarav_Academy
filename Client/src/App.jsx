import './index.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YouTubeVideos from './components/YouTubeVideos'
import AboutPage from './components/AboutPage'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Trailblazers from './components/Trailblazers'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NcertSolutions from './components/NcertSolutions'
import Assignments from './components/Assignments'
import SamplePapers from './components/SamplePapers'
import TestSeries from './components/TestSeries'
import StudyNotes from './components/StudyNotes'
import FloatingButtons from './components/FloatingButtons'

function App() {
  const [currentView, setCurrentView] = useState('home')

  return (
    <div className="app">
      <Navbar onNavigate={(view) => setCurrentView(view)} />
      <FloatingButtons />

      {currentView === 'home' && (
        <>
          <Hero />
          <YouTubeVideos />
          <WhyChooseUs />
          <Trailblazers />
          <Stats />
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

      <Footer />
    </div>
  )
}

export default App
