import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Workshops from './components/Workshops'
import Footer from './components/Footer'
import ProfilePicture from './components/ProfilePicture'

export default function App() {
  return (
    <div className="min-h-screen w-full font-sans bg-white">
      <Hero />
      <ProfilePicture />
      <About />
      <Workshops />
      <Skills />
      <Education />
      <Footer />
    </div>
  )
}


