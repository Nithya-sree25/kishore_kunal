import React from "react";
import "./Contact.css";

function Contact() {

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <section className="contact">

      {/* PROFILE */}
      <div className="profile">
        <div className="profile-img">Dr R</div>
        <h2>Dr.VAIRAVEL MADESHWARAN</h2>
      </div>

      {/* EMAIL */}
      <div className="card">
        <h3>📧 Email</h3>

        <div className="row">
          <span>phdannauniv2020@gmail.com</span>
          <button onClick={() => copyText("murugadosspd@gmail.com")}>Copy</button>
        </div>

      </div>
      {/* SOCIAL */}
      {/* <div className="card">  
        <h3>🔗 LinkedIn</h3>
        <a href="#" className="btn">dr-r-murugadoss →</a>
      </div> */}

      <div className="card">
        <h3>🎓 Google Scholar</h3>
        <a href="https://example.com" className="btn">View Profile →</a>
      </div>

      {/* FORM */}
      <div className="card">
        <h3>✉️ Send a Message</h3>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>

        <button className="send-btn">Send</button>
      </div>

    </section>
  );
}

export default Contact;