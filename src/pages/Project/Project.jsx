import "./Project.css";

import img1 from "../../assets/images/image.png";
import img2 from "../../assets/images/image2.png";

const projects = [
  {
    title: "BNN CS Study Hub",
    img: img1,
    desc: "The ultimate centralized FYCS study hub for BNN Computer Science students. Access first-year notes, practicals, and assignments easily.",
    skills: ["React.js", "CSS", "JavaScript"],
    github: "https://github.com/rishiuttamsahu-lang/FYCS-Study-Hub",
    demo: "https://fycs-study-hub.vercel.app/",
    wip: false
  },

  {
    title: "Compact Files",
    img: img2,
    desc: "Compress PDF and image files instantly in your browser — 100% free, no sign-up, no upload. Reduce PDF size by up to 80% and compress JPG, PNG, WebP images with 3 quality levels.",
    skills: ["React.js", "Browser APIs", "JavaScript"],
    github: "https://github.com/rishiuttamsahu-lang/compact-files",
    demo: "https://nanocrush.vercel.app/",
    wip: false
  },

  {
    title: "🚀 Coming Soon",
    img: null,
    desc: "Something exciting is in the works. Stay tuned for the next project — built with React and powered by AI.",
    skills: ["React.js", "AI", "???"],
    github: "#",
    demo: "#",
    wip: true
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className={`project-card ${project.wip ? "wip-card" : ""}`} key={index}>

            {project.img ? (
              <img src={project.img} alt={`Screenshot of ${project.title} web app`} />
            ) : (
              <div className="wip-banner">🔨 In Progress...</div>
            )}

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            {!project.wip && (
              <div className="btns">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            )}

          </div>

        ))}

      </div>

    </section>

  );

}
