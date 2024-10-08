import "../styles/Resume.css"
import resume from '/resume.pdf'

const Resume = () => {
   

  return (
    <div className="resume">
      <div className="resumedesc">
        <h1>Download My Resume</h1>
        <a href={resume} style={{
        color: 'white',
        textDecoration: 'none',
        outline: 'none',
        fontSize: '20px',
        padding: '10px',
        border: '1px solid white',
        borderRadius: '5px',
      }} download="Raymond_Fosu_Resume.pdf" className="download-btn">
        Download Resume
      </a>
        </div>
        <div className="pdf-viewer">
          <p>PDF Format</p>
          <iframe
            src={resume}
            width="80%"
            height="300px"
            title="Resume"
          ></iframe>

        </div>
    </div>
  )
}

export default Resume