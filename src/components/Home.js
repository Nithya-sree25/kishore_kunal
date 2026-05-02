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

        <h1 className="name">Dr.VAIRAVEL MADESHWAREN</h1>

        <h3 className="roles">
          Researcher | Author 
        </h3>

        <p className="description">
          A seasoned professional with 15+ years of experience in mechanical design, CFD, welding technology, and renewable energy, combining strong academic and industry expertise. Began as a sheet metal designer and later transitioned into academia, serving as Assistant and Associate Professor. Holds dual Ph.D. degrees in Mechanical Engineering and Welding Technology, along with management studies. Currently works as an Associate Professor and Visiting Faculty, actively contributing to research, mentoring, and industry collaboration.
        </p>

         <button 
          className="connect-btn"
          onClick={() => navigate("/contact")}
        >
          Let’s Connect
        </button>

        {/* STATS */}
        {/* <div className="stats">
          <div>
            <h2>15+</h2>
            <p>Years of Experience</p>
          </div>
          <div>
            <h2>150+</h2>
            <p>Publications</p>
          </div>
          <div>
            <h2>20+</h2>
            <p>Awards</p>
          </div>
          <div>
            <h2>10+</h2>
            <p>Memberships</p>
          </div>
        </div> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="home-right">
        <img src={profile} alt="profile" />
      </div>
    </section>
  );
}

export default Home;