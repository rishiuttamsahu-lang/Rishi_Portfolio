import "./Contact.css";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "af72904e-c920-49e6-b977-a1e53b42f9e2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Try again!");
    }

    // 3 second baad gayab ho jaayega
    setTimeout(() => {
      setResult("");
    }, 1500);
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
            <span>Pune, Maharashtra</span>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={onSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>

          {result && (
            <span className={`form-result ${
              result.includes("Successfully") ? "success" :
              result.includes("Sending") ? "sending" : "error"
            }`}>
              {result}
            </span>
          )}

        </form>

      </div>

    </div>
  );

}

export default Contact;