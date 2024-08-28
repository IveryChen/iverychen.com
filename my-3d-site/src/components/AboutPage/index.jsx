import { map } from "lodash";
import React from "react";

import Card from "../../components/Card";
import images from "../../imageImports";

import "./AboutPage.css";

const education = [
  ["B.A Computer Science @", "Brown University (2024)"],
  ["B.F.A Film/Animation/Video @", "Rhode Island School of Design (2024)"],
];

const jobs = [
  ["Associate Software Engineer @", "Tesla"],
  ["Research Engineer @", "Brown HCI"],
  ["UX Engineering Intern @", "BMW"],
  ["Technical Director Intern @", "Pixar"],
  ["VR Software Engineering Intern @", "Bayer"],
  ["AR Developer @", "NASA"],
];

export default class AboutPage extends React.PureComponent {
  render() {
    return (
      <div>
        <section className="about-section">
          <div className="about-description">
            <Card height="400px" width="350px">
              <img
                width="350px"
                height="400px"
                src={images["ivery"]}
                alt="Ivery's profile pic"
              />
            </Card>
            <Card height="400px" width="350px">
              <div
                style={{
                  padding: "20px",
                  fontStyle: "italic",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                Hi! My name is Ivery and I'm a fullstack software engineer, tech
                artist, 3D animator, and ARVR/Graphics Unity Developer. I love
                creative tools, ARVR, and anything 3D + Interactive. I also do
                fashion photography, make animated films, watch movies, work out
                and eat good Chinese food.
              </div>
            </Card>
          </div>
        </section>

        <section className="about-section">
          <div className="about-details">
            <div className="about-subsection">
              <h3 className="subheading">Education</h3>
              {map(education, ([degree, school]) => {
                return (
                  <div
                    style={{
                      fontStyle: "italic",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    {degree}
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {school}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="about-subsection">
              <h3 className="subheading">Work</h3>
              {map(jobs, ([title, company]) => {
                return (
                  <div
                    style={{
                      fontStyle: "italic",
                      fontWeight: "500",
                      textAlign: "left",
                    }}
                  >
                    {title}
                    <span
                      style={{
                        fontWeight: "700",
                      }}
                    >
                      {company}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="about-subsection">
              <h3 className="subheading">Skills</h3>
              <div
                style={{
                  fontStyle: "italic",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Code:
                </span>
                C++, C#, Java, Python, Java, OpenCV, JavaScript, Typescript,
                AWS, Scala, Three.js, React, HTML, CSS, Git, WebGL, GLSL, SQL,
                AFrame, Qt, Linux
              </div>
              <div
                style={{
                  fontStyle: "italic",
                  fontWeight: "500",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Tools:
                </span>
                Figma, Unity, Blender, Maya, Houdini, Nuke, Katana, Arnold,
                Substance Painter, Motion Capture, Marvellous Designer, C4D, Max
                MSP, ROS, Adobe Suite(Premiere Pro, AfterEffects, Photoshop,
                Illustrator, Audition, Animator), DaVinci Resolve, Arduino
              </div>
            </div>
          </div>
        </section>

        <section className="about-section">
          <div className="image-container">
            <img
              src={images["smiley_balloon"]}
              alt={"smiley balloon"}
              className="title-image"
            />
          </div>
        </section>
      </div>
    );
  }
}
