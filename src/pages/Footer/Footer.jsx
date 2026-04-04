import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Rishikesh Uttam Sahu</p>

        <div className="social-icons">

          <a href="https://github.com/rishiuttamsahu-lang/" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="#" title="LinkedIn Coming Soon"><FaLinkedin /></a>
          <a href="https://www.instagram.com/itz_rishi_8468/" target="_blank" rel="noreferrer"><FaInstagram /></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;
