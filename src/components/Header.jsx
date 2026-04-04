import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Header() {

    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>

            <div className="logo">
                <span className="logo-text"><span>R</span>ishi</span>
            </div>

            <ul className={`links ${menuOpen ? "open" : ""}`}>
                <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
                <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                <li><a href="#project" onClick={() => setMenuOpen(false)}>Project</a></li>
                <li><a href="#serv" onClick={() => setMenuOpen(false)}>Services</a></li>
                <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/rishiuttamsahu-lang/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                <li><a href="https://www.instagram.com/itz_rishi_8468/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#" title="LinkedIn Coming Soon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            </ul>

            <button
                className={`hamburger ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

        </header>
    )
}

export default Header
