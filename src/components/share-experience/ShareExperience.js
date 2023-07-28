import React from "react";
import './ShareExperience.scss';

export default function ShareExperience(props) {
  return (
    <section className="share-experience-wrapper section-margin">
      <div className={`custom-container share-experience-wrapper__container ${props.commonObj.border}`}>
        <div className="share-experience-wrapper__main d-flex justify-content-between">
          <div>
            <h2>{props.commonObj.title}</h2>
            <h4>Join a community of people bringing the world together in a whole new way.</h4>
            <div className="share-experience-wrapper__cta-wrapper d-flex align-items-center gap">
              <button className="btn secondary-btn">Learn more</button>
              <button className="btn primary-btn">Get Started</button>
            </div>
          </div>
          <div className="share-experience-wrapper__image">
            <img src={`images/share-experience/${props.commonObj.imgUrl}.png`} className="img-responsive share-image" />
          </div>
        </div>
      </div >
    </section >
  );
}