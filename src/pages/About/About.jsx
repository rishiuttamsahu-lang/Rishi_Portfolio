import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hey, I'm Rishi — a Computer Science student who lives at the
            intersection of clean code and relentless curiosity. I call myself
            a vibe coder: someone who doesn't just write functions, but crafts
            experiences. Whether it's building full-stack web apps, diving into
            the latest AI tools, or shipping projects that actually help people,
            I'm always moving forward. I believe the best code carries an energy
            — purposeful, elegant, and alive. My goal is to keep exploring, keep
            building, and turn every idea into something real.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;
