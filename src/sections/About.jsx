import "../styles/About.css"
import React from "../assets/React.png"
import MongoDB from "../assets/MongoDB.png"
import NodeJS from "../assets/NodeJS.png"
import Express from "../assets/Express.png"
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import Footer from "./Footer"

const About = () => {
  return (<>
    <div className='about'>
      <h1>About</h1>
      <p>I love building cool projects, web development is my primary specialty.
        All I need is a strong internet connectivity and your work is done.
        I have acquired a wholesome knowledge in the<br/> tech field for a very long time and it has made my life and others very easy.
        I am <span>trustworthy, creative, quick and also an effective communicator</span>.
        I fondly anticipate to work in a <br/>challenging and rewarding organisation to achieve personal growth and development.
      </p>
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
    <Footer />
    </>
  )
}

export default About