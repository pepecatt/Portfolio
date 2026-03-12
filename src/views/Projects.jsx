import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Projects.css";
import { assets } from "../assets";

function ProjectsView() {
  const [showSchematics, setShowSchematics] = useState(false);
  const [showFilmWeb, setShowFilmWeb] = useState(false);

  return (
    <>
      <div className="bar">
        <Navbar />
      </div>
      <div className="projects-page">
        <h1 id="top" className="projects-h1">
          Projects
        </h1>

        <div className="projects-list">
          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3>Electric Skateboard Tail Light System</h3>
                <div>
                  <p>
                    Designed and implemented the tail light system (lights at
                    the back of the skateboard that would light up as the
                    skateboard slows down)
                  </p>
                  <ul className="bulleted-list">
                    <li>Designed PCB in KiCad</li>
                    <li>
                      Used an accelerometer to detect deceleration events for
                      braking indication{" "}
                    </li>
                    <li>Soldered SMD components</li>
                    <li>
                      Verified functionality using a multimeter and oscilloscope
                    </li>
                  </ul>
                </div>
                <ul className="project-skills">
                  <li>PCBs </li>
                  <li>Microcontrollers: ATmega328P</li>
                  <li>Soldering </li>
                  <li>
                    <img src={assets.icons.kicadIcon}></img>
                    KiCad
                  </li>
                </ul>
              </div>

              <div className="project-links">
                {!showSchematics && (
                  <a onClick={() => setShowSchematics((prev) => !prev)}>
                    Schematics and process ↓
                  </a>
                )}
              </div>
            </div>

            <img src={assets.electrium.pcb3DView}></img>

            {showSchematics && (
              <div id="showmore">
                <li>
                  Tail lights schematic
                  <img src={assets.electrium.tailSchematic} />
                </li>
                <li>
                  Merged schematic (version 1): head lights and tail lights onto
                  one PCB, worked with partner
                  <img src={assets.electrium.mergedSchematic} />
                </li>
                <li>
                  Final schematic
                  <img src={assets.electrium.finalSchematic} />
                </li>
                <li>
                  PCB editor view
                  <img src={assets.electrium.pcbEditor} />
                </li>
                <li>
                  physical PCB
                  <img src={assets.electrium.pcbPhysical} />
                </li>
                <li className="pcb12">
                  <img src={assets.electrium.pcb1} />
                  <img src={assets.electrium.pcb2} />
                </li>
                <a
                  href="#top"
                  onClick={() => setShowSchematics((prev) => !prev)}
                >
                  Hide ↑
                </a>
              </div>
            )}
          </div>

          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3 id="filmweb">Film Database Web Application </h3>
                <p>
                  Displays movie data using the IMDb API, replicating core
                  functionality of a streaming service interface, integrated
                  Firebase Authentication
                </p>
                <ul className="project-skills">
                  <li>
                    <img src={assets.skills.reactIcon} alt="React" />
                    React
                  </li>
                  <li>
                    <img src={assets.skills.firebaseIcon} alt="Firebase" />
                    Firebase
                  </li>
                  <li>
                    <img src={assets.skills.htmlIcon} alt="HTML" />
                    HTML
                  </li>
                  <li>
                    <img src={assets.skills.cssIcon} alt="CSS" />
                    CSS
                  </li>
                  <li>
                    <img src={assets.skills.jsIcon} alt="JS" />
                    JavaScript
                  </li>
                </ul>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/pepecatt/IMDb-Web-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github link
                </a>
                {!showFilmWeb && (
                  <a onClick={() => setShowFilmWeb((prev) => !prev)}>
                    Pictures of website and process ↓
                  </a>
                )}
              </div>
            </div>

            <img src={assets.imdb.imdbWeb}></img>

            {showFilmWeb && (
              <div id="showmore">
                <li>
                  Home view
                  <img src={assets.imdb.homeView} />
                </li>
                <li>
                  <p>
                    Register and Login views (where Firebase Authentication is
                    used)
                  </p>
                  <li className="pcb12">
                    <img src={assets.imdb.signupView} />
                    <img src={assets.imdb.loginView} />
                  </li>
                </li>
                <li>
                  <p>
                    After signup/login -{">"} Movies view - can add movies to
                    cart
                  </p>
                  <img src={assets.imdb.imdbWeb} />
                </li>
                <li>
                  Cart view - can "Checkout"
                  <img src={assets.imdb.cartView} />
                </li>
                <li>
                  Selected genres and movies that are "checked out" will save to
                  account
                  <img src={assets.imdb.firebaseView} />
                </li>
                <li>
                  Settings view - where selected genres can be changed
                  <img src={assets.imdb.settingsView} />
                </li>
                <a
                  href="#filmweb"
                  onClick={() => setShowFilmWeb((prev) => !prev)}
                >
                  Hide ↑
                </a>
              </div>
            )}
          </div>

          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3>Embedded Motor Control System </h3>
                <div>
                  <ul className="bulleted-list">
                    <li>
                      Developed embedded firmware in C to read analog input from
                      an external ADC via SPI
                    </li>
                    <li>
                      Generated PWM signals using STM32 timer peripherals to
                      control motor speed and position
                    </li>
                    <li>
                      Configured and tested STM32 peripherals using STM32CubeIDE
                    </li>
                  </ul>
                </div>
                <ul className="project-skills">
                  <li className="learning">
                    <img src={assets.skills.cIcon} />C
                  </li>
                  <li className="learning">
                    <img src={assets.skills.cppIcon} />
                    C++
                  </li>
                </ul>
              </div>
            </div>
            <img src={assets.projects.stm32Img}></img>
          </div>

          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3>This Website</h3>
                <p>
                  A self-coded portfolio website to showcase my skills and
                  projects. A fun passion project!
                </p>
                <ul className="project-skills">
                  <li>
                    <img src={assets.skills.reactIcon} />
                    React
                  </li>
                  <li>
                    <img src={assets.skills.htmlIcon} />
                    HTML
                  </li>
                  <li>
                    <img src={assets.skills.cssIcon} />
                    CSS
                  </li>
                  <li>
                    <img src={assets.skills.jsIcon} />
                    JavaScript
                  </li>
                </ul>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/pepecatt/portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github link
                </a>
              </div>
            </div>
            <img src={assets.projects.websiteImg}></img>
          </div>

          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3>Streamlit Web Application </h3>
                <p>
                  An interactive data analysis web app hosted via Streamlit that
                  allows users to input numerical data manually or upload CSV
                  files for statistical analysis
                </p>
                <ul className="project-skills">
                  <li>
                    <img src={assets.skills.pythonIcon} alt="Python" />
                    Python
                  </li>
                  <li>
                    <img src={assets.skills.numpyIcon} />
                    Numpy
                  </li>
                  <li>
                    <img src={assets.skills.pandasIcon} />
                    Pandas
                  </li>
                </ul>
              </div>
              <div className="project-links">
                <a
                  href="https://github.com/pepecatt/Streamlit-Web-App"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github link
                </a>
              </div>
            </div>
            <img src={assets.projects.streamlitImg}></img>
          </div>

          <div className="project-card">
            <div className="project-card-text">
              <div className="project-content">
                <h3>Various SolidWorks Projects </h3>
                <ul className="project-skills">
                  <li>
                    <img src={assets.skills.solidworksIcon} alt="SolidWorks" />
                    SolidWorks
                  </li>
                  <li>3D Printing</li>
                </ul>
              </div>
            </div>
            <div id="showmore">
              <li>
                <img src={assets.solidworks.solidworks1} />
              </li>
              <li className="pcb12">
                <img src={assets.solidworks.solidworks2a} />
                <img src={assets.solidworks.solidworks2b} />
              </li>
              <li className="pcb12">
                <img src={assets.solidworks.solidworks3a} />
                <img src={assets.solidworks.solidworks3b} />
              </li>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2026 Catherine Huang · Built with React</p>
      </footer>
    </>
  );
}

export default ProjectsView;
