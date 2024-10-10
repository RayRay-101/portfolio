import "../styles/Home.css"
import "../styles/About.css"
import { Link } from 'react-router-dom'
import HomePicture from "../assets/homepic.png"

import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import React from "../assets/React.png"
import MongoDB from "../assets/MongoDB.png"
import NodeJS from "../assets/NodeJS.png"
import Express from "../assets/Express.png"

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

    <div className='about'>    
      <h1>My Skills</h1>
      <div className="techSkills">
      <div className="name">
        <img src={html} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>HTML</p>
        </div>
        <div className="name">
        <img src={css} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>CSS</p>
        </div>
        <div className="name">
        <img src={js} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>Javascript</p>
        </div>
        <div className="name">
        <img src={React} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>ReactJS</p>
        </div>

        <div className="name">
        <img src={MongoDB} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>MongoDB</p>
        </div>

        <div className="name">
        <img src={Express} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>ExpressJS</p>
        </div>
        
        <div className="name">
        <img src={NodeJS} loading="lazy" fetchpriority="high" alt="tech"/>
        <p>NodeJS</p>
        </div>
      </div>
    </div>

    
      <h1 className="p">My Projects.</h1>
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
      <Footer />
  </>
  )
}

export default Home