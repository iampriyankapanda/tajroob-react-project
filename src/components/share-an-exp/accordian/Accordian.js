import React from "react";

export default function Accordian() {
  return (
    <section className="accordian-wrapper section-margin">
      <div className="custom-container">
        <div className="accordian-wrapper__header">
          <h2>FAQ''s</h2>
          <p>Have a question? We’ve got you covered with FAQ’s</p>
        </div>
        <div className="accordian">
          <input type="checkbox" className="accordian-custom-input" id="accordian1" />
          <label htmlFor="accordian1" className="accordian-custom-label">
            <div>
              <h4>How will I stream my experience online?</h4>
            </div>
          </label>
        </div>
      </div>
    </section>
  );
}