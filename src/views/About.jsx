import Navbar from "../components/Navbar";
import "./About.css";

function AboutView() {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <section id="hero" className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <img className="portrait" src="/src/images/portrait.jpeg"></img>
              <div className="hero-buttons">
                <a
                  className="resume-btn"
                  href="src\images\CatherineHuang_Resume.pdf"
                  download
                  target="_blank"
                >
                  <img
                    className="resume"
                    src="src\icons\apps\download-minimalistic-svgrepo-com.svg"
                  ></img>
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/catherine-huang-3b6449348/"
                  target="_blank"
                >
                  <img
                    className="linkedin"
                    src="src\icons\apps\linkedin-svgrepo-com.svg"
                  ></img>
                </a>
                <a href="https://github.com/pepecatt" target="_blank">
                  <img
                    className="github"
                    src="src\icons\apps\github-142-svgrepo-com.svg"
                  ></img>
                </a>
                <a href="mailto:c365huan@uwaterloo.ca" target="_blank">
                  <img
                    className="email"
                    src="src\icons\apps\mail-svgrepo-com.svg"
                  ></img>
                </a>
              </div>
            </div>
            <div className="hero-right">
              <h1 className="name1">Catherine</h1>
              <h1 className="name2">Huang</h1>
              <p className="about-me">
                Nanotechnology Engineering student at the University of
                Waterloo, I'm curious and excited to explore everything my
                degree offers! I'm passionate about learning and trying new
                things, getting out of my comfort zone and becoming the best
                version of myself.
              </p>
              <p className="about-me2">
                One of the ways I'm working towards that is by gaining new
                skills, whether it's through student design teams or my own
                personal projects (such as this website!)
              </p>
              <p className="about-me3">
                In my free time, I like listening to music, reading fantasy
                novels, and drinking matcha!
              </p>
            </div>
          </div>
        </section>

        <section id="skills" href="skills">
          <h1>Skills</h1>
          <p>Highlighted are the skills I'm learning right now!</p>
          <div className="skills-div">
            <h3>Programming</h3>
            <ul className="skills-icons">
              <li>
                <img src="src\icons\icons1\java-svgrepo-com.svg" />
                Java
              </li>
              <li>
                <img src="src\icons\icons1\python-svgrepo-com.svg" />
                Python
              </li>
              <li className="learning">
                <img src="src\icons\icons1\C_Programming_Language.svg" />C
              </li>
              <li className="learning">
                <img src="src\icons\icons1\C++_Logo.svg" />
                C++
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
          </div>
          <div className="skills-div">
            <h3>Frameworks & Tools</h3>
            <ul className="skills-icons">
              <li>
                <img src="src\icons\icons2\react-svgrepo-com.svg" />
                React
              </li>
              <li>
                <img src="src\icons\icons2\numpy-svgrepo-com.svg" />
                Numpy
              </li>
              <li>
                <img src="src\icons\icons2\pandas-svgrepo-com.svg" />
                Pandas
              </li>
              <li>
                <img src="src\icons\icons2\firebase.svg"></img>Firebase Auth
              </li>
              <li>
                <img src="src\icons\icons2\imdb-svgrepo-com.svg"></img>IMDb API
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Software</h3>
            <ul className="skills-icons">
              <li>
                <img src="src\icons\icons3\solidworks.svg"></img>SolidWorks
              </li>
              <li className="learning">
                <img src="src\icons\icons3\matlab-svgrepo-com.svg"></img>
                MATLAB
              </li>
              <li>
                <img src="src\icons\icons3\excel-svgrepo-com.svg"></img>
                Excel
              </li>
              <li>
                <img src="src\icons\icons3\word-svgrepo-com.svg"></img>Word
              </li>
              <li>
                <img src="src\icons\icons3\git-svgrepo-com.svg"></img>Git &
                GitHub
              </li>
              <li>
                <img src="src\icons\icons3\vs-code-svgrepo-com.svg"></img>
                VS Code
              </li>
              <li>
                <img src="src\icons\icons3\intellij-svgrepo-com.svg"></img>
                IntelliJ IDEA
              </li>
              <li>
                <img src="src\icons\icons3\KiCad-Logo.svg"></img>KiCad
              </li>
              <li className="learning">
                <img src="src\icons\icons3\stm32.png"></img>STM32CubeIDE
              </li>
              <li className="learning">
                <img src="src\icons\icons3\shopify-svgrepo-com.svg"></img>
                Shopify
              </li>
              <li>
                <img src="src\icons\icons3\photoshop-cc-logo-svgrepo-com.svg"></img>
                Adobe Photoshop
              </li>
              <li>
                <img src="src\icons\icons3\adobe-after-effects-svgrepo-com.svg"></img>
                Adobe After Effects
              </li>
              <li>
                <img src="src\icons\icons3\capcut-svgrepo-com.svg"></img>
                Capcut
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Hardware & Lab</h3>
            <ul className="skills-hl">
              <li>PCBs, </li>
              <li>Microcontrollers: </li>
              <li>ATmega328P,</li>
              <li className="learning">STM32, </li>
              <li>Soldering, </li>
              <li>Breadboarding, </li>
              <li>Micropipetting </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Languages</h3>
            <ul className="skills-hl">
              <li>English, </li>
              <li className="learning">French (B1), </li>
              <li>Chinese (Intermediate)</li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <h1>Featured Projects</h1>
          <div className="projects-div">
            <div className="featproject-card">
              <img src="src\images\proj-electrium\pcb3dview.jpg"></img>
              <h3>Electric Skateboard Tail Light System</h3>
              <p>
                Designed and implemented the tail light system using the
                ATmega328P microcontroller, designed PCB in KiCad, soldered SMD
                components, verified functionality using a multimeter and
                oscilloscope.
              </p>
              <a className="read-more" href="/projects">
                {" "}
                Schematics and more →
              </a>
            </div>
            <div className="featproject-card">
              <img src="src\images\proj-imdbwebapp\imdbweb.png"></img>
              <h3>Film Database Web Application</h3>
              <p>
                Displays movie data using the IMDb API, replicating core
                functionality of a streaming service interface, integrated
                Firebase Authentication
              </p>
              <a
                className="read-more"
                href="/projects/#filmweb"
              >
                Read more →
              </a>
            </div>
            <div className="featproject-card">
              <img src="src\images\proj\stm32.png"></img>
              <h3>(Current) Aircraft Embedded Flight Software</h3>
              <p>
                Program the team’s custom autopilot, ZeroPilot, and verify
                flight control functionality using C, C++, and STM32-based
                hardware
              </p>
              <a href="/projects/#efs" className="read-more">
                Read more →
              </a>
            </div>
          </div>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <div className="experience-cards-div">
            <div className="experience-card">
              <div className="experience-text">
                <h2>
                  <img
                    className="deardaisie-logo"
                    src="src\images\Dear Daisie logo.png"
                  ></img>
                </h2>
                <p className="experience-info">
                  December 2025 - Present &nbsp;|&nbsp; Remote
                </p>
                <ul>
                  <p>
                    Co-founded with my sister, Dear Daisie is a gift brand
                    offering plush flower bouquets, each holding their own
                    meaning and symbolic narrative.
                  </p>
                  <li>
                    Built a Shopify e-commerce website with custom CSS and
                    managed social media marketing
                  </li>
                  <li>
                    Coordinated with manufacturer to translate conceptual
                    designs into finished products
                  </li>
                  <a href="https://www.deardaisie.com" target="_blank">
                    deardaisie.com
                  </a>
                </ul>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-text">
                <h2>Music Camp Counsellor</h2>
                <p className="experience-info">
                  October 2023, October 2024 &nbsp;|&nbsp; Schomberg, ON
                </p>
                <ul>
                  <li>
                    Served as a senior counsellor for two annual music retreats
                    supporting 80+ junior students, providing leadership,
                    mentorship, and day-to-day supervision
                  </li>
                  <li>
                    Facilitated daily small-group rehearsals (6–10 students),
                    offering individualized feedback in orchestral score reading
                    and string technique while adapting instruction to varied
                    skill levels
                  </li>
                  <li>
                    Collaborated with 2–5 peer leaders to plan and execute
                    large-scale team-building activities for 80+ students,
                    strengthening coordination, engagement, and peer
                    collaboration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutView;
