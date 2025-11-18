import React from 'react';
import './Education.css'; // This will import the CSS later

const Education: React.FC = () => {
  return (
    <section className="education-section">
      <img src="/icons/education.svg" alt="Education icon" className="icon" />
      <div className="education-content">
        <h2>Education</h2>
        <p>Your subtitle or description goes here</p>
      </div>
    </section>
  );
};

export default Education;
