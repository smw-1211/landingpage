import React, { Component } from 'react'
import '../../pages/Landingpage/css/style.css'

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
      <a href="#">
        <img className="logo" alt="Brand's logo" width="200" height="400" src="assets/img/My project-1.png" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><a className="main-nav-link" href="#workouts">Our Workouts</a></li>
          <li><a className="main-nav-link" href="#contact-us">Contact Us</a></li>
          <li><a className="main-nav-link nav-cta" href="#">Login</a></li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon className="icon-mobile-nav" name="menu-outline"></ion-icon>
        <ion-icon className="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>
    </header>

      </div>
    )
  }
}

export default Header
