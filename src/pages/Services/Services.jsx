import "./Services.css"
import { FaCode, FaBrain, FaLaptopCode } from "react-icons/fa";

function Services() {

  return (
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Full Stack Development</h3>
          <p>Building end-to-end web applications using React, HTML, CSS, JavaScript and modern tools — clean, scalable, and production-ready.</p>
        </div>

        <div className="service-card">
          <FaBrain className="service-icon" />
          <h3>Vibe Coding & AI</h3>
          <p>Leveraging the latest AI tools and workflows to build smarter, faster, and more creative solutions. Turning bold ideas into real products.</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h3>Web Applications</h3>
          <p>Building modern web applications with dynamic features, smooth performance, and interfaces that feel great to use.</p>
        </div>

      </div>

    </div>
  )

}

export default Services;
