import React from 'react'
// import './App.css';
import Header from '../../components/LandingPage/header';
import Hero from '../../components/LandingPage/hero'
import Info from '../../components/LandingPage/Info'
import Index from '../../components/LandingPage/index'
import Testimonials from '../../components/LandingPage/testimonials'
import WorkoutPlan from '../../components/LandingPage/workoutplan'
import Footer from '../../components/LandingPage/footer';

export default function LandingPage() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Info />
      <WorkoutPlan />
      <Testimonials />
      <Index />
      <Footer />
    </div>
  )
}
