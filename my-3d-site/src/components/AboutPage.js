import React from 'react';
import images from '../imageImports'; 

function AboutPage() {
    return (
      <div>
        {/* Section 1: Description */}
        <section className="about-section">
          <div className="about-description">
            <div className="about-description-image">
              <img src={images["ivery"]} alt="Ivery's profile pic" />
            </div>
            <div className="about-description-text">
              <h2 className="heading">LOOK</h2>
              <br></br>
              <p className="italics-thin">Ivery is a fullstack software engineer, tech artist, 3D animator, and ARVR/Graphics Unity Developer. She loves creative tools, ARVR, and anything 3D + Interactive. Outside of that, she likes to do fashion photography and watch movies, work out and eat Chinese food.</p>
            </div>
          </div>
        </section>
  
        {/* Section 2: Education, Work, Skills */}
        <section className="about-section">
          <div className="about-details">
            {/* Subsection 1: Education */}
            <div className="about-subsection">
              <h3 className="subheading">Education</h3>
              <p className="italics-thin">B.A Computer Science @ <span className="italics-bold">Brown University (2024)</span></p>
              <p className="italics-thin">B.F.A Film/Animation/Video @ <span className="italics-bold">Rhode Island School of Design (2024) </span></p>
            </div>
  
            {/* Subsection 2: Work */}
            <div className="about-subsection">
              <h3 className="subheading">Work</h3>
              <p className="italics-thin">Associate Software Engineer @ <span className="italics-bold">Tesla</span></p>
              <p className="italics-thin">Research Engineer @ <span className="italics-bold">Brown HCI</span></p>
              <p className="italics-thin">UX Engineering Intern @ <span className="italics-bold">BMW</span></p>
              <p className="italics-thin">Technical Director Intern @ <span className="italics-bold">Pixar</span></p>
              <p className="italics-thin">VR Software Engineering Intern @ <span className="italics-bold">Bayer</span></p>
              <p className="italics-thin">AR Developer @ <span className="italics-bold">NASA</span></p>

            </div>
  
            {/* Subsection 3: Skills */}
            <div className="about-subsection">
              <h3 className="subheading">Skills</h3>
              <p className="italics-thin"><span className="italics-bold">Code:</span> C++, C#, Java, Python, Java, OpenCV, JavaScript, Typescript, AWS, Scala, Three.js, React, HTML, CSS, Git, WebGL, GLSL, SQL, AFrame, Qt, Linux</p>
              <p className="italics-thin"><span className="italics-bold">Tools:</span> Figma, Unity, Blender, Maya, Houdini, Nuke, Katana, Arnold, Substance Painter, Motion Capture, Marvellous Designer, C4D, Max MSP, ROS, Adobe Suite(Premiere Pro, AfterEffects, Photoshop, Illustrator, Audition, Animator), DaVinci Resolve, Arduino</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="image-container">
            <img src={images["smiley_balloon"]} alt={"smiley balloon"} className="title-image" />
          </div>
        </section>



      </div>
    );
  }
  
  export default AboutPage;