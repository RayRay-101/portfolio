import "../styles/Home.css"
import { Link } from 'react-router-dom'
import HomePicture from "../assets/homepic.png"

import Phone from "../assets/phone.png"; 
import Email from "../assets/email.png"; 

import FoodD from "../assets/foodd.jpeg"
import ChatApp from "../assets/chatapp.jpeg"
import Footer from "./Footer.jsx"


const Home = () => {

  const projects =[
    {
      name: "D-Blinks Food Delivery",
      description: "A food delivery app that connects individuals to best restaurants and eateries nearby. Food is also delivered with a blink of an eye",
      link: "#",
      screenshot:<img src={FoodD} loading="lazy" fetchpriority="high" alt="Food Delivery App" />
      
    },
    {
      name: "Chat Application",
      description: "A food delivery app that connects individuals to best restaurants and eateries nearby. Food is also delivered with a blink of an eye",
      link:"https://chat-app-plum-nu.vercel.app",
      screenshot:<img src={ChatApp} loading="lazy" fetchpriority="high" alt="Chat Application" />
      
    }
  ]

  return (<>
    <div className="home">
      <div className='homepage'>
        <p>HI THERE <span className="wave-emoji">👋</span> I'M</p>
        <h1>RAYMOND FOSU</h1>
        <h1>ADDO</h1>
        <h3>FULL-STACK WEB DEVELOPER👨‍💻</h3>
        <p className='desc'>I'm a professional full-stack web developer with both frontend and backend development skills based in Kumasi, Ghana.</p>
        <button>
          <ul>
            <li><Link to="/contact">Hire Me</Link></li>
          </ul>
        </button>
      </div>
      <div className="homepageImage">
        <img src={HomePicture} loading="lazy" fetchpriority="high" alt="man coding" />
      </div>
    </div>


<div className="skills">
<h1>My Skills</h1>
<p>Check out all my skills in order of Proficiency</p>
<div className="skill-bars">
  <div className="skill-bar">
    <div className="skill-name">HTML/CSS</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "90%" }}>
        <span>90%</span>
      </div>
    </div>
  </div>
  <div className="skill-bar">
    <div className="skill-name">JavaScript</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "85%" }}>
        <span>85%</span>
      </div>
    </div>
  </div>
  <div className="skill-bar">
    <div className="skill-name">React</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "90%" }}>
        <span>90%</span>
      </div>
    </div>
  </div>
  <div className="skill-bar">
    <div className="skill-name">Node.js</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "75%" }}>
        <span>75%</span>
      </div>
    </div>
  </div>
  <div className="skill-bar">
    <div className="skill-name">Express.js</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "70%" }}>
        <span>70%</span>
      </div>
    </div>
  </div>
  <div className="skill-bar">
    <div className="skill-name">MongoDB</div>
    <div className="skill-level">
      <div className="skill-progress" style={{ width: "80%" }}>
        <span>80%</span>
      </div>
    </div>
  </div>
</div>
</div>


    <div className="projects">

      <h1 className="p">My Projects.</h1>
      <p>Check out my recent projects</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            <div className="project-screenshot">{project.screenshot}</div>
          </div>
          
        ))}
      </div>
<div className='contactme'>
          <h1>Contact Me</h1>
          <p>Check out my contact details</p>

        <div className='contactme-container'>
          <div className='contactme-details'>
          <div className='image'>
            <img src={Phone} loading="lazy" fetchpriority="high" alt="" />
            </div>
            <h3>CONTACT NUMBER</h3>
            <p>+233 257837362</p>
          </div>
  
          <div className='contactme-details'> 
            <div className='image'>
            <img src={Email} loading="lazy" fetchpriority="high" alt="" />
            </div>
            <h3>EMAIL ADDRESS</h3>
            <p>addoraymond123@gmail.com</p>
          </div>
        </div>
        </div>  
    </div>
      <Footer />
  </>)
}

export default Home