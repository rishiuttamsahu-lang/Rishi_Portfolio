import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiVite,
  SiVercel,
} from "react-icons/si";

function Skills() {

  return (

    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">

          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <SiTailwindcss />
          <SiVite />
          <FaGitAlt />
          <FaGithub />
          <FaFigma />
          <SiVercel />

          {/* Duplicate for infinite scroll */}
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
          <SiTailwindcss />
          <SiVite />
          <FaGitAlt />
          <FaGithub />
          <FaFigma />
          <SiVercel />

        </div>
      </div>
    </div>

  )

}

export default Skills;
