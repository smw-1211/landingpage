import React from 'react'
// import './App.css';
import Header from '../../components/LandingPage/header';
import Hero from '../../components/LandingPage/hero'
import Index from '../../components/LandingPage/index'

export default function LandingPage() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Index />
    </div>
  )
}
