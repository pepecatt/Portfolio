import { useState } from "react";
import Navbar from "../components/Navbar";
import "./Projects.css";

function ProjectsView() {
  const [showSchematics, setShowSchematics] = useState(false);

  return (
    <>
      <Navbar />
      <h1 className="projects-h1">Projects</h1>

      <div className="projects-list">
        <div className="project-card">
          <div className="project-card-text">
            <h3>Electric Skateboard Tail Light System</h3>
            <p>
              Designed and implemented the tail light system (lights at the back
              of the skateboard that would light up as the skateboard slows
              down)
            </p>
            <ul className="bulleted-list">
              <li>Designed PCB in KiCad</li>
              <li>Used an accelerometer for speed detection</li>
              <li>Soldered SMD components</li>
              <li>
                Verified functionality using a multimeter and oscilloscope
              </li>
            </ul>
            <ul className="project-skills">
              <li>PCBs </li>
              <li>Microcontrollers: ATmega328P</li>
              <li>Soldering </li>
              <li>
                <img src="src\icons\icons3\KiCad-Logo.svg"></img>
                KiCad
              </li>
            </ul>

            {!showSchematics && (
              <a
                className="link-margin"
                onClick={() => setShowSchematics((prev) => !prev)}
              >
                Schematics and process ↓
              </a>
            )}
          </div>

          <img src="src\images\proj-electrium\pcb3dview.jpg"></img>

          {showSchematics && (
            <div id="schematics">
              <li>
                Tail lights schematic
                <img src="src\images\proj-electrium\tailschematic.png" />
              </li>
              <li>
                Merged schematic (version 1): head lights and tail lights onto
                one PCB, worked with partner
                <img src="src\images\proj-electrium\mergedschematic.png" />
              </li>
              <li>
                Final schematic
                <img src="src\images\proj-electrium\finalschematic.png" />
              </li>
              <li>
                PCB editor view
                <img src="src\images\proj-electrium\pcbeditor.png" />
              </li>
              <li>
                physical PCB
                <img src="src\images\proj-electrium\pcb.jpeg" />
              </li>
              <li className="pcb12">
                <img src="src\images\proj-electrium\pcb1.jpeg" />
                <img src="src\images\proj-electrium\pcb2.jpeg" />
              </li>
              <a onClick={() => setShowSchematics((prev) => !prev)}>Hide ↑</a>
            </div>
          )}
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>This Website</h3>
            <p>
              A self-coded portfolio website to showcase my skills and projects.
              A fun passion project!
            </p>
            <ul className="project-skills">
              <li>
                <img src="src\icons\icons2\react-svgrepo-com.svg" />
                React
              </li>
              <li>
                <img src="src\icons\icons1\html-5-svgrepo-com.svg" />
                HTML
              </li>
              <li>
                <img src="src\icons\icons1\css-3-svgrepo-com.svg" />
                CSS
              </li>
              <li>
                <img src="src\icons\icons1\javascript-svgrepo-com.svg" />
                JavaScript
              </li>
            </ul>
            <a href="https://github.com/pepecatt/Portfolio" target="_blank"> Github link →</a>
          </div>
          <img src="src\images\proj-electrium\pcb3dview.jpg"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>(Current) Aircraft </h3>
            <p>ddddd</p>
            <ul className="project-skills">
              <li className="learning">
                <img src="src\icons\icons1\C_Programming_Language.svg" />C
              </li>
              <li className="learning">
                <img src="src\icons\icons1\C++_Logo.svg" />
                C++
              </li>
              <li>Microcontrollers: STM32</li>
            </ul>
            <a target="_blank"> Github link →</a>
          </div>
          <img src="src\images\proj-electrium\pcb3dview.jpg"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>Film Database Web Application </h3>
            <p>
              Displays movie data using the IMDb API, replicating core
              functionality of a streaming service interface, integrated
              Firebase Authentication
            </p>
            <ul className="project-skills">
              <li>
                <img src="src\icons\icons1\python-svgrepo-com.svg" />
                Python
              </li>
              <li>
                <img src="src\icons\icons2\react-svgrepo-com.svg" />
                React
              </li>
              <li>
                <img src="src\icons\icons3\vs-code-svgrepo-com.svg"></img>
                VS Code
              </li>
              <li>
                <img src="src\icons\icons2\firebase.svg"></img>Firebase Auth
              </li>
              <li>
                <img src="src\icons\icons1\html-5-svgrepo-com.svg" />
                HTML
              </li>
              <li>
                <img src="src\icons\icons1\css-3-svgrepo-com.svg" />
                CSS
              </li>
              <li>
                <img src="src\icons\icons1\javascript-svgrepo-com.svg" />
                JavaScript
              </li>
            </ul>
            <a href="https://github.com/pepecatt/IMDb-Web-App" target="_blank"> Github link →</a>
          </div>
          <img src="src\images\proj-electrium\pcb3dview.jpg"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>United Nations Habitat Hackathon (2nd Place) </h3>
            <p>
              Our pitch for WellNest: an AI-powered network of healthcare kiosks
              providing basic diagnostics and location-based referrals in
              Waterloo, particularly for unhoused residents.
            </p>
            <ul className="bulleted-list">
              <li>
                Wrote the presentation script, edited the final pitch video
              </li>
              <li>
                Designed outreach strategy and user flow for kiosk experience
                and web map connecting users to nearby healthcare resources
              </li>
            </ul>
            <ul className="project-skills">
              <li>Web App </li>
              <li>Project Management</li>
              <li>Video Editing </li>
            </ul>
            <a
              href="https://uwaterloo.ca/engineering/news/students-design-quality-life-solutions-habitat"
              target="_blank"
              className="link-margin"
            >
              Results posted by UWaterloo (and our final video submission) →
            </a>
          </div>
          <img src="src\images\proj-hackathon.png"></img>
        </div>

        <div className="project-card">
          <div className="project-card-text">
            <h3>Streamlit Web Application </h3>
            <p>
              An interactive data analysis web app with Streamlit that allows
              users to input numerical data manually or upload CSV files for
              statistical analysis
            </p>
            <ul className="project-skills">
              <li>
                <img src="src\icons\icons2\numpy-svgrepo-com.svg" />
                Numpy
              </li>
              <li>
                <img src="src\icons\icons2\pandas-svgrepo-com.svg" />
                Pandas
              </li>
            </ul>
            <a href="https://github.com/pepecatt/Streamlit-Web-App" target="_blank"> Github link →</a>
          </div>
          <img src="src\images\proj-electrium\pcb3dview.jpg"></img>
        </div>

        


      </div>
    </>
  );
}

export default ProjectsView;
