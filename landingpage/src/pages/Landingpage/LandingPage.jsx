import React from 'react'
// import './App.css';
import Header from '../../components/LandingPage/header';
import Hero from '../../components/LandingPage/hero'
import Info from '../../components/LandingPage/Info'
import Index from '../../components/LandingPage/index'
import Testimonials from '../../components/LandingPage/testimonials'

export default function LandingPage() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Info />
      <Testimonials />
      <Index />
    </div>
  )
}
