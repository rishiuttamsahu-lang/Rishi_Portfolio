import { useEffect } from "react";
import "./Hero.css";

export default function Hero() {

  useEffect(() => {
    // UnicornStudio script load
    const existingScript = document.querySelector(
      'script[src*="unicornStudio.umd.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.4/dist/unicornStudio.umd.js";
      script.onload = () => {
        if (window.UnicornStudio) {
          window.UnicornStudio.init();
        }
      };
      (document.head || document.body).appendChild(script);
    } else {
      if (window.UnicornStudio) {
        window.UnicornStudio.init();
      }
    }

    // Watermark hatao
    const interval = setInterval(() => {
      const watermark = document.querySelector('a[href*="unicorn.studio"]');
      if (watermark) {
        watermark.style.display = "none";
        clearInterval(interval);
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero" id="hero">

      <div
        style={{ width: "100%", height: "120vh" }}
        data-us-project="eL2Z56brnklSEjG2lnZa"
      ></div>

      <div className="hero-bg-text">Hi! I'm Rishi</div>

      <div className="hero-character">
        <img src="img2.png" alt="Rishi" />
      </div>

      <div className="content">
        <div className="buttn">
          <a href="#contact">Contact</a>
          <a href="#about">Who i'm</a>
        </div>
      </div>

    </div>
  );
}