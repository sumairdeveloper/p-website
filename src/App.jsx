import React from 'react'
import Header from './components/header/Header'
import HeroSection from './components/hero-section/Herosection'
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className='main-component-wrapper'>
        <HeroSection />
      </div>
    </div>
  )
}