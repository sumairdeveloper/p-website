import Header from './components/header/Header'
import HeroSection from './components/heroSection/HeroSection'
import './App.css'
import AboutMe from './components/aboutMe/AboutMe'

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