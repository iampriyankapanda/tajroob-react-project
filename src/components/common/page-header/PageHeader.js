import React from "react";
import "./PageHeader.scss";

export default function PageHeader(props) {
  return (
    <section className="page-header-wrapper">
      <div className="custom-container">
        <h2>{props.commonObj.title}</h2>
        <h3>{props.commonObj.subTitle}</h3>
        <button className="btn primary-btn">Get Started</button>
      </div>
    </section>
  );
}