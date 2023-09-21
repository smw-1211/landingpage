import React from 'react'


export default function Info() {
  return (
    <div>
        <section className="section-how">
        <div className="container">
          <span className="subheading">How it works</span>
          <h2 className="heading-secondary">
            Your daily dose of fit workout plan in 3 simple steps
          </h2>
        </div>

        <div className="container grid grid--2-cols grid--center-v">
          <div className="step-text-box">
            <p className="step-number">01</p>
            <h3 className="heading-tertiary">
              Tell us what are you specialized in<br></br>(and what not)
            </h3>
            <p className="step-description">
              Never again waste time thinking how to be fit! Fitomee will create a 100% 
              personalized workut plan just for you. We make sure you meet with the expectations that 
              FitOMee is here to provide! <br></br>That is why We priorly ask for your fitness level 
              and the category you are specialized in. 
            </p>
          </div>

          <div className="step-img-box">
            <img
              src="assets/img/app/app-screen-4.png"
              className="step-img"
              alt="iPhone app
            preferences selection screen"
            />
          </div>

          <div className="step-img-box">
            <img
              src="assets/img/app/app-screen-5.png"
              className="step-img"
              alt="iPhone app
            meal approving plan screen"
            />
          </div>
          <div className="step-text-box">
            <p className="step-number">02</p>
            <h3 className="heading-tertiary">Approve your daily workout plan</h3>
            <p className="step-description">
              Once the workout is provided, complete it the same day. You can reach out to the trainer assigned at any point of time for your assistance.
            </p>
          </div>

          <div className="step-text-box">
            <p className="step-number">03</p>
            <h3 className="heading-tertiary">Receive workout plan everyday with daily status</h3>
            <p className="step-description">
              We at FitOmee believe in everyday improvement and <br></br>hence we provide customized workout plans to all our trainees every single day with the status of change in their BMI and number of hours exercised!
            </p>
          </div>
          <div className="step-img-box">
            <img
              src="assets/img/app/app-screen-6.png"
              className="step-img"
              alt="iPhone app
            delivery screen"
            />
          </div>
        </div>
      </section>     
    </div>
  )
}

