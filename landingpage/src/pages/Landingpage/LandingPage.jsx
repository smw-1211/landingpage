import React from 'react'
// import './App.css';
import Header from '../../components/LandingPage/header';
import Hero from '../../components/LandingPage/hero'
import Info from '../../components/LandingPage/Info'
import Index from '../../components/LandingPage/index'

export default function LandingPage() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Info />
      <Index />
    </div>
  )
}
