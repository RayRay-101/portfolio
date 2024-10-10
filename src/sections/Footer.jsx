import '../styles/Footer.css'
import Github from "../assets/github.png"
import LinkedIn from "../assets/linkedin.png"

const Footer = () => {
  return (
    <section className='section'>
        <div className='first'>
            <div className='social-links'>
                <a href="https://www.linkedin.com/in/raymond-addo-4b7346207">
                <img src={LinkedIn} loading="lazy" fetchpriority="high" alt="linkedin icon" />
                </a>
                <a href="https://github.com/RayRay-101">
                <img className="github" src={Github} loading="lazy" fetchpriority="high" alt="github icon" />
                </a>
            </div>
            <div className='logo'>
                <p>RR</p>
            </div>
            <div className='email'>
                <p>addoraymond123@gmail.com</p>
            </div>
        </div>
                <hr />
        <div className='copy'>
            <p>&copy; 2024 Addo Raymond</p>
        </div>        
    </section>
  )
}

export default Footer