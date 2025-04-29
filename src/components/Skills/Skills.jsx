import React from "react";
import "./Skills.css"; // Link to the CSS file

const Skills = () => {
  return (
    <div className="skill-section section-padding">
      <div className="container">
      <div className="sectionTitle-wrap">
          <h2 className="section-title text-center mb-12">My Skills</h2>
        </div>
        <div className="skill-grid">
          <div className="card-content">
            <h3 className="section-sub-title">Frontend</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">React</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-70"></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">HTML5</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-90"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">CSS3</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-85"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">SCSS</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-80"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">javascript</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-75"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">jquery</span>
                  <span className="skill-percentage">70%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-70"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="section-sub-title">Frameworks & Libraries</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Bootstrap</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-90"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Tailwind CSS</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-85"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="section-sub-title">UI/UX Tools</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Figma</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-90"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Photoshop</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-85"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-content">
            <h3 className="section-sub-title">Other Skills</h3>
            <div className="skill-list">
              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Git/GitHub</span>
                  <span className="skill-percentage">90%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-90"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Responsive Design</span>
                  <span className="skill-percentage">85%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-85"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Performance Optimization</span>
                  <span className="skill-percentage">80%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-80"></div>
                </div>
              </div>

              <div className="skill-item">
                <div className="skill-label">
                  <span className="skill-name">Pixel Perfect Design</span>
                  <span className="skill-percentage">75%</span>
                </div>
                <div className="skill-bar-bg">
                  <div className="skill-bar-fill w-75"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;
