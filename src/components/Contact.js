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
        <h2>Dr.KISHORE KUNAL</h2>
      </div>

      {/* EMAIL */}
      <div className="card">
        <h3>📧 Email</h3>

        <div className="row">
          <span>kishore.sona@gmail.com</span>
          <button onClick={() => copyText("kishore.sona@gmail.com")}>Copy</button>
        </div>

      </div>
      {/* SOCIAL */}
      {/* <div className="card">  
        <h3>🔗 LinkedIn</h3>
        <a href="#" className="btn">dr-r-murugadoss →</a>
      </div> */}

      <div className="card">
  <h3>📞 Phone Number</h3>

  <div className="row">
    <span>+91 82524-41005</span>

    <button onClick={() => copyText("+91 82524-41005")}>
      Copy
    </button>
  </div>
  <div className="row">
    <span>+91 8376002441</span>

    <button onClick={() => copyText("+91 8376002441")}>
      Copy
    </button>
  </div>
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