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
              <img src="/footer-icons/twitter.svg" className="img-responsive footer-header-icons" />
              <img src="/footer-icons/facebook.svg" className="img-responsive footer-header-icons" />
              <img src="/footer-icons/instagram.svg" className="img-responsive footer-header-icons" />
              <img src="/footer-icons/youtube.svg" className="img-responsive footer-header-icons" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}