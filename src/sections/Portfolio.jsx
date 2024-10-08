import "../styles/Portfolio.css"
import Resume from "./Resume.jsx"
import Footer from "./Footer.jsx"
import FoodD from "../assets/foodd.jpeg"
import ChatApp from "../assets/chatapp.jpeg"

const Portfolio = () => {

  const projects =[
    {
      name: "D-Blinks Food Delivery",
      description: "A food delivery app that connects individuals to best restaurants and eateries nearby. Food is also delivered with a blink of an eye",
      link: "#",
      screenshot:<img src={FoodD} alt="Food Delivery App" />
      
    },
    {
      name: "Chat Application",
      description: "A food delivery app that connects individuals to best restaurants and eateries nearby. Food is also delivered with a blink of an eye",
      link:"https://chat-app-plum-nu.vercel.app",
      screenshot:<img src={ChatApp} alt="Chat Application" />
      
    }
  ]

  return (<>
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <p>Projects Built By Moi.</p>
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
        <Resume />
    </div>
    <Footer />
    </>
  )
}

export default Portfolio