import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_top">
          <div>
            <div className="footer_title">
              <span className="icon_title">
                <img src="images/proprio.png" alt="Icon" />
              </span>
              <span>
                PropConnect
              </span>
            </div>
            <div className="desc">
              Lorem Ipsum Is Simply Dummy Text Of  <br /> The And Typesetting Industry. 
              Lorem <br /> Ipsum Is Simply Dummy Text Of Printing.
            </div>
            <div >
              <img src="images/facebook.png" alt="Icon" />
              <img src="images/linkedin.png" alt="Icon" />
              <img src="images/instagram.png" alt="Icon" />
              <img src="images/twitter.png"alt="Icon" />
            </div>
          </div>
          <div>
            <div className="footer_title">
              Quick Links
            </div>
            <div>
              <ul>
                <li>
                  <a href="#"> Home</a>
                </li>
                <li>
                  <a href="#"> About Us</a>
                </li>
                <li>
                  <a href="#"> Blog</a>
                </li>
                <li>
                  <a href="#"> FAQ</a>
                </li>
                <li>
                  <a href="#"> Services</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer_title">
              Services
            </div>
            <div>
              <ul>
                <li>
                  Wish List
                </li>
                <li>
                  Login
                </li>
                <li>
                  Submit a Request
                </li>
                <li>
                  Appointment
                </li>
                <li>
                  Promotional Offers
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="footer_title">
              Contact
            </div>
            <div className="contract">
              <ul>
                <li>
                  <div><img src="sourire.svg" alt="Icon" /></div>
                  <div>124, Brooklyn, New York <br /> United States</div>
                </li>
                <li>
                  <div><img src="sourire.svg" alt="Icon" /></div>
                  <div>+11 2 3456 7890</div>
                </li>
                <li>
                  <div><img src="sourire.svg" alt="Icon" /></div>
                  <div>info@houzing.com</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="fb_left">
            © Copyright Medih 2022 All Right Reserved.
          </div>
          <div className="fb_right">
            <span className="terms">
              Terms Of Use
            </span>
            <span className="privacy">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter_desc">
          <div className="newsletter_title">Join Our Newsletter Now</div>
          <div className="newsletter_text">Register now to get updates on promotions...</div>
        </div>
        <div className="subscribe_field">
          <input type="email" name="email" id="email" placeholder="Enter Your Email To Subscribe..." />
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
