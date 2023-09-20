import React from 'react'

function Index() {
  return (
    <div>

    <React.Fragment>
    <main>
      <section className="section-cta">
        <div className="container">
          <div className="cta">
            <div className="cta-text-box">
              <h2 className="heading-secondary">Get your first workout plan if you are new to gym</h2>
              <p className="cta-text">
                Hassle-free workouts are waiting for you. Start
                contributing to your health today. You can exercise at your ease with private assistance.<br></br> 
                And the first workout is on us!!
              </p>

              <form className="cta-form" action="#">
                <div>
                  <label for="full-name">Full Name</label>
                  <input
                    id="full-name"
                    type="text"
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div>
                  <label for="email">Email address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="me@example.com"
                    required
                  />
                </div>

                <div>
                  <label for="select-where">Where did you hear from us?</label>
                  <select id="select-where" required>
                    <option value="">Please choose one option:</option>
                    <option value="friends">Friends and family</option>
                    <option value="youtube">YouTube video</option>
                    <option value="podcast">Podcast</option>
                    <option value="ad">Facebook ad</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button className="btn btn--form">Sign up now</button>

                {/* <!-- <input type="checkbox" />
                <input type="number" /> --> */}
              </form>
            </div>
            <div
              className="cta-img-box"
              role="img"
              aria-label="Woman enjoying food"
            ></div>
          </div>
        </div>
      </section>
    </main>
        </React.Fragment>
      
    </div>
  )
}

export default Index;