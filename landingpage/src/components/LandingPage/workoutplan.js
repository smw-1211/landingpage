import React, { Component } from 'react'

export class Workoutplan extends Component {
  render() {
    return (
      <div>

<section className="section-meals">
        <div id="workouts" className="container center-text">
          <span className="subheading">Workouts</span>
          <h2 className="heading-secondary">
            Fitomee chooses among 200+ exercises
          </h2>
        </div>

        <div className="container grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img
              src="assets/img/meals/jumping-jacks.jpg"
              className="meal-img"
              alt="Japanese Gyozas"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegetarian">Warmup Exercises</span>
              </div>
              <p className="meal-title">Jumping Jacks</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>12</strong> Reps</span>
                  <span><strong>3</strong> Sets</span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>Weekdays &reg; <strong>Mon & Wed</strong></span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>See detailed plan</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="meal">
            <img
              src="assets/img/meals/arm-raises.jpg"
              className="meal-img"
              alt="Avocado Salad"
            />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Arms</span>
                {/* <span className="tag tag--paleo">Raises</span> */}
              </div>
              <p className="meal-title">Arm Raises</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="flame-outline"></ion-icon>
                  <span><strong>3 </strong>Sets</span>
                  <span><strong>10 </strong>Reps</span>
                </li>
                <li className="meal-attribute">
                  <ion-icon
                    className="meal-icon"
                    name="restaurant-outline"
                  ></ion-icon>
                  <span>Weekdays &reg; <strong>Tue</strong></span>
                </li>
                <li className="meal-attribute">
                  <ion-icon className="meal-icon" name="star-outline"></ion-icon>
                  <span><strong>See detailed plan</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <div className="diets">
            <h3 className="heading-tertiary">Find these workout categories</h3>
            <ul className="list">
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Abs</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Arms</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Back & Shoulder</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Chest</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Full-Body</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Legs</span>
              </li>
              <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span>Warmup Exercises</span>
              </li>
              {/* <li className="list-item">
                <ion-icon className="list-icon" name="checkmark-outline"></ion-icon>
                <span></span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="container all-recipes">
          <a href="/login" className="link">See all workout plans &rarr;</a>
        </div>
      </section>

        
      </div>
    )
  }
}

export default Workoutplan
