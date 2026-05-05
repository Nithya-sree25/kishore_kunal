import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/sir_photo.png"; // add your image

function Home() {
  const navigate = useNavigate();
  return (
    <section className="home">

      {/* LEFT SIDE */}
      <div className="home-left">
        <p className="intro">Hi there 👋, I'm</p>

        <h1 className="name">Dr.KISHORE KUNAL</h1>
        <div className="mobile-image">
          <img src={profile} alt="profile" />
        </div>

        <h3 className="roles">
          Professor 
        </h3>

        <p className="description">
         I am a senior academic leader with 21 years of experience in higher education and digital learning. Expertise in 
strategic planning, curriculum innovation, and industry collaboration. An accomplished researcher with 35+ 
publications and proven doctoral supervision, having mentored 20 scholars, contributing to institutional growth and 
accreditation-driven quality enhancement
        </p>

         <button 
          className="connect-btn"
          onClick={() => navigate("/contact")}
        >
          Let's get together
        </button>

        
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Home;