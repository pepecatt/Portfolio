import Navbar from "../components/Navbar";
import "./About.css";
import { assets } from "../assets";

function AboutView() {
  return (
    <>
      <Navbar />
      <div className="main-page">
        <section id="hero" className="hero">
          <div className="hero-container">
            <div className="hero-left">
              <img className="portrait" src={assets.about.portrait}></img>
              <div className="hero-buttons">
                <a
                  className="resume-btn"
                  href={assets.about.resumePDF}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="resume" src={assets.about.downloadIcon}></img>
                  Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/catherine-huang-3b6449348/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="linkedin"
                    src={assets.about.linkedinIcon}
                  ></img>
                </a>
                <a
                  href="https://github.com/pepecatt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="github" src={assets.about.githubIcon}></img>
                </a>
                <a
                  href="mailto:c365huan@uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="email" src={assets.about.emailIcon}></img>
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
                <img src={assets.skills.javaIcon} alt="Java" />
                Java
              </li>
              <li>
                <img src={assets.skills.pythonIcon} alt="Python" />
                Python
              </li>
              <li className="learning">
                <img src={assets.skills.cIcon} alt="C" />C
              </li>
              <li className="learning">
                <img src={assets.skills.cppIcon} alt="C++" />
                C++
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
                <img src={assets.skills.jsIcon} alt="JavaScript" />
                JavaScript
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Frameworks & Tools</h3>
            <ul className="skills-icons">
              <li>
                <img src={assets.skills.reactIcon} alt="React" />
                React
              </li>
              <li>
                <img src={assets.skills.numpyIcon} alt="Numpy" />
                Numpy
              </li>
              <li>
                <img src={assets.skills.pandasIcon} alt="Pandas" />
                Pandas
              </li>
              <li>
                <img src={assets.skills.firebaseIcon} alt="Firebase" />
                Firebase Auth
              </li>
              <li>
                <img src={assets.skills.imdbIcon} alt="IMDb API" />
                IMDb API
              </li>
            </ul>
          </div>
          <div className="skills-div">
            <h3>Software</h3>
            <ul className="skills-icons">
              <li>
                <img src={assets.skills.solidworksIcon} alt="SolidWorks" />
                SolidWorks
              </li>
              <li className="learning">
                <img src={assets.skills.matlabIcon} alt="MATLAB" />
                MATLAB
              </li>
              <li>
                <img src={assets.skills.excelIcon} alt="Excel" />
                Excel
              </li>
              <li>
                <img src={assets.skills.wordIcon} alt="Word" />
                Word
              </li>
              <li>
                <img src={assets.skills.gitIcon} alt="Git" />
                Git & GitHub
              </li>
              <li>
                <img src={assets.skills.vscodeIcon} alt="VS Code" />
                VS Code
              </li>
              <li>
                <img src={assets.skills.intellijIcon} alt="IntelliJ" />
                IntelliJ
              </li>
              <li>
                <img src={assets.skills.kicadIcon} alt="KiCad" />
                KiCad
              </li>
              <li className="learning">
                <img src={assets.skills.stm32Icon} alt="STM32CubeIDE" />
                STM32CubeIDE
              </li>
              <li className="learning">
                <img src={assets.skills.shopifyIcon} alt="Shopify" />
                Shopify
              </li>
              <li>
                <img src={assets.skills.photoshopIcon} alt="Photoshop" />
                Adobe Photoshop
              </li>
              <li>
                <img src={assets.skills.afterEffectsIcon} alt="After Effects" />
                Adobe After Effects
              </li>
              <li>
                <img src={assets.skills.capcutIcon} alt="CapCut" />
                CapCut
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
              <img src={assets.electrium.pcb3DView}></img>
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
              <img src={assets.imdb.imdbWeb}></img>
              <h3>Film Database Web Application</h3>
              <p>
                Displays movie data using the IMDb API, replicating core
                functionality of a streaming service interface, integrated
                Firebase Authentication
              </p>
              <a className="read-more" href="/projects/#filmweb">
                Read more →
              </a>
            </div>
            <div className="featproject-card">
              <img src={assets.projects.stm32Img}></img>
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
          <a className="seeallprojects-btn">See All Projects</a>
        </section>

        <section id="experience">
          <h1>Experience</h1>
          <div className="experience-cards-div">
            <div className="experience-card">
              <div className="experience-text">
                <h2>
                  <img
                    className="deardaisie-logo"
                    src={assets.about.dearDaisieLogo}
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
                  <a
                    href="https://www.deardaisie.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
      <footer className="footer">
          <p>© 2026 Catherine Huang · Built with React</p>
        </footer>
    </>
  );
}

export default AboutView;
