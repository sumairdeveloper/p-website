import Header from './components/header/Header'
import HeroSection from './components/hero-section/Herosection'
import './App.css'
import AboutMe from './components/aboutme/about-me'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
        <AboutMe />
      </div>
    </div>
  )}
  export default App