import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A balanced workout plan delivered to you with personal assistance!!
            </h1>
            <p className="hero-description">
              We since an year promote smart encouragement to exercise everyday that will make you
              fit and which you can mould as per your fitness. Tailored to your personal requirements and
              nutritional needs.
            </p>
            <a href="/login" className="btn btn--full margin-right-sm"
              >Get ready for your first workout</a
            >
            <a href="/login" className="btn btn--outline">Learn more &darr;</a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src="assets/img/customers/customer-1.jpg" alt="Customer photo" />
                <img src="assets/img/customers/customer-2.jpg" alt="Customer photo" />
                <img src="assets/img/customers/customer-3.jpg" alt="Customer photo" />
                <img src="assets/img/customers/customer-4.jpg" alt="Customer photo" />
                <img src="assets/img/customers/customer-5.jpg" alt="Customer photo" />
                <img src="assets/img/customers/customer-6.jpg" alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>2,500+</span> workout plans shared last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              // src="assets/img/Picture1.png"
              src="assets/img/hero-1.png"
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
        
      </div>
    )
  }
}

export default Hero
