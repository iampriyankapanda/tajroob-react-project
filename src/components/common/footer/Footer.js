import React from "react";
import '../footer/Footer.scss';
export default function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="custom-container">
        <div className="footer-wrapper__header d-flex align-items-center">
          <h6>Follow us</h6>
          <ul>
            <li className="d-flex footer-wrapper__header-list">
              <img src="/footer-icons/twitter.svg" className="img-responsive footer-header-icons" alt="footer" />
              <img src="/footer-icons/facebook.svg" className="img-responsive footer-header-icons" alt="footer" />
              <img src="/footer-icons/instagram.svg" className="img-responsive footer-header-icons" alt="footer" />
              <img src="/footer-icons/youtube.svg" className="img-responsive footer-header-icons" alt="footer" />
            </li>
          </ul>
        </div>
        <div className="footer-wrapper__main d-flex justify-content-between">
          <div className="footer-wrapper__main-logo">
            <img src="/images/footer-logo.png" className="image-responsive footer-logo" />
            <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero’s De Finibus Bonorum et Malorum for use in a type specimen book.</p>
          </div>
          <div className="footer-wrapper__main-footer-links d-flex  justify-content-between">
            <div className="footer-wrapper__common-links">
              <h6>HELP & SUPPORT</h6>
              <ul>
                <li><img src="/footer-icons/phone.svg" /><span>+91 9845198451</span></li>
                <li><img src="/footer-icons/mail.svg" className="img-responsive footer-icons" /><span>care@.tajaroob.com</span></li>
                <li><img src="/footer-icons/address.svg" /><span>Shop 5, 189 Queen Street, Melbourne, VIC, 3000 Australia</span></li>
              </ul>
            </div>
            <div className="footer-wrapper__common-links">
              <h6>OTHERS</h6>
              <ul>
                <li><a href="#0"></a>Home</li>
                <li><a href="#0"></a>All Experiences</li>
                <li><a href="#0"></a>Share an Experience</li>
                <li><a href="#0"></a>Become an Ambassador</li>
                <li><a href="#0"></a>Help</li>
              </ul>

            </div>
            <div className="footer-wrapper__common-links">
              <h6>COMPANY</h6>
              <ul>
                <li><a href="#0"></a>About</li>
                <li><a href="#0"></a>Careers</li>
                <li><a href="#0"></a>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-wrapper__footer d-flex align-items-center justify-content-between">
          <ul className="d-flex gap align-items-center">
            <li><a href="">Privacy</a></li>
            <li><a href="">Terms of Service</a></li>
          </ul>
          <p>Copyright © Tajaroob. All Rights Reserved</p>
        </div>
      </div>
    </section>
  );
}