import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YouTubeVideos from './components/YouTubeVideos'
import About from './components/About'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import Trailblazers from './components/Trailblazers'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <YouTubeVideos />
      <WhyChooseUs />
      <Stats />
      <Trailblazers />
      <About />
      <Team />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
