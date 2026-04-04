import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [result, setResult]   = useState("");
  const [status, setStatus]   = useState(""); // "sending" | "success" | "error" | ""
  const [visible, setVisible] = useState(false);

  const showMsg = (msg, type) => {
    setResult(msg);
    setStatus(type);
    setVisible(true);
    // fade out after 2.5s
    setTimeout(() => setVisible(false), 2500);
    // remove from DOM after fade-out transition (0.4s)
    setTimeout(() => { setResult(""); setStatus(""); }, 2900);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    showMsg("Sending your message…", "sending");

    const formData = new FormData(event.target);
    formData.append("access_key", "af72904e-c920-49e6-b977-a1e53b42f9e2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        showMsg("✓  Message sent successfully!", "success");
        event.target.reset();
      } else {
        showMsg("✕  Something went wrong. Please try again.", "error");
      }
    } catch {
      showMsg("✕  Network error. Please try again.", "error");
    }
  };

  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Get In Touch</h3>
          <p>
            If you want to work together or have any question,
            feel free to contact me.
          </p>
          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <span>rishiuttamsahu@gmail.com</span>
          </div>
          <div className="info-item">
            <FaPhone className="contact-icon" />
            <span>India</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Bhiwandi, Maharashtra</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={onSubmit}>
          <input  type="text"  name="name"    placeholder="Your Name"    required />
          <input  type="email" name="email"   placeholder="Your Email"   required />
          <textarea name="message" placeholder="Your Message" rows="6"   required />

          <button type="submit" className={status === "sending" ? "btn-sending" : ""}>
            {status === "sending" ? (
              <><span className="btn-spinner" /> Sending…</>
            ) : "Send Message"}
          </button>

          {/* Animated result message */}
          {result && (
            <div className={`form-result ${status} ${visible ? "result-in" : "result-out"}`}>
              {status === "sending" && <span className="dots-loader"><span/><span/><span/></span>}
              <span className="result-text">{result}</span>
            </div>
          )}
        </form>

      </div>
    </div>
  );
}

export default Contact;