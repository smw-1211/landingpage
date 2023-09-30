import React from 'react'
// import './App.css';
import Header from '../../components/LandingPage/header';
import Hero from '../../components/LandingPage/hero'
import Info from '../../components/LandingPage/Info'
import Index from '../../components/LandingPage/index'
import Testimonials from '../../components/LandingPage/testimonials'
import WorkoutPlan from '../../components/LandingPage/workoutplan'
import Footer from '../../components/LandingPage/footer';
import './css/general.css'
import './css/queries.css'
import './css/style.css'


export default function LandingPage() {
  return (
    <div className='App'>
      <div id='landing-page'>
      <Header />
      <Hero />
      <Info />
      <WorkoutPlan />
      <Testimonials />
      <Index />
      <Footer />
      </div>
    </div>
  )
}
