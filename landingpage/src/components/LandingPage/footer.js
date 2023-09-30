import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
            <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="footer-sub-logo" alt="fitomee logo" src="assets/img/My project-1.png" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
              ></a>
            </li>
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
              ></a>
            </li>
            <li>
              <a className="footer-link" href="#"
                ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
              ></a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; 2027 by FitOMee, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p id="contact-us"className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">
              UST Blueconch, Ground & 7th Floor, Sai Radhe Complex, <br></br>Pune 411028
            </p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">020-24211976</a
              ><br />
              <a className="footer-link" href="mailto:hello@fitomee.com"
                >hello@fitomee.com</a
              >
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">About</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">About Us</a></li>
            <li><a className="footer-link" href="#">Contaact Us</a></li>
            <li><a className="footer-link" href="#">iOS app</a></li>
            <li><a className="footer-link" href="#">Android app</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">About FitOMee</a></li>
            <li><a className="footer-link" href="#">For Business</a></li>
            <li><a className="footer-link" href="#">Healh partners</a></li>
            <li><a className="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">Workout directory </a></li>
            <li><a className="footer-link" href="#">Help center</a></li>
            <li><a className="footer-link" href="#">Privacy & terms</a></li>
          </ul>
        </nav>
      </div>
    </footer>

      </div>
    )
  }
}

export default Footer
