import React from 'react';

function AboutPage() {
    return (
      <div>
        {/* Section 1: Description */}
        <section className="about-section">
          <div className="about-description">
            <div className="about-description-image">
              <img src="image-url.jpg" alt="Description" />
            </div>
            <div className="about-description-text">
              <h2>About Us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam auctor dui nec eleifend.</p>
            </div>
          </div>
        </section>
  
        {/* Section 2: Education, Work, Skills */}
        <section className="about-section">
          <div className="about-details">
            {/* Subsection 1: Education */}
            <div className="about-subsection">
              <h3>Education</h3>
              <p>Bachelor's Degree in Computer Science - University Name (Year)</p>
              <p>Master's Degree in Software Engineering - University Name (Year)</p>
            </div>
  
            {/* Subsection 2: Work */}
            <div className="about-subsection">
              <h3>Work Experience</h3>
              <p>Software Engineer at Company Name (Year - Present)</p>
              <p>Web Developer at Company Name (Year - Year)</p>
            </div>
  
            {/* Subsection 3: Skills */}
            <div className="about-subsection">
              <h3>Skills</h3>
              <ul>
                <li>JavaScript (React, Node.js)</li>
                <li>HTML/CSS</li>
                <li>SQL/NoSQL databases</li>
                <li>Version control (Git)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default AboutPage;