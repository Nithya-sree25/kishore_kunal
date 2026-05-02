import React from "react";
import "./About.css";
import profile from "../assets/sir_photo.png";  // add your image

function About() {
  return (
    <section className="about">

      {/* PROFILE IMAGE */}
      <div className="about-header">
        <img src={profile} alt="profile" />
        <h1>About Dr.VAIRAVEL MADESHWARAN</h1>
      </div>

      {/* SUMMARY */}
      <div className="about-card">
        <h2>Summary</h2>
        <p>
          A dynamic professional with over 15 years of versatile experience spanning mechanical design,
          CFD, welding technology, and renewable energy systems. Bringing a unique blend of academic
          expertise and industrial insight. Currently serving as Associate Professor and actively
          engaged in research, mentoring, and innovation.
        </p>
      </div>

      {/* EXPERIENCE */}
      <div className="about-card">
        <h2>Professional Experience</h2>
        <p>
          Worked as Steel Design Engineer at Craftsman Automation (2010–2014). Later transitioned
          into academia as Assistant Professor and promoted to Associate Professor, focusing on
          teaching, research, and student development.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="about-card">
  <h2>Educational Qualifications</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Ph.D – Welding Analysis</h4>
        <p>VISTAS, Chennai • 2019 • First Class (90%)</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>M.E – Engineering Design</h4>
        <p>Nandha Engineering College, Anna University • 2014 • 8.9 CGPA</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>B.E – Mechanical Engineering</h4>
        <p>Nandha Engineering College, Anna University • 2010 • First Class</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Diploma – Mechanical Engineering</h4>
        <p>DOTE • 2007 • First Class with Honour (82%)</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Higher Secondary (12th)</h4>
        <p>State Board • 2005</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>SSLC (10th)</h4>
        <p>State Board • 2003</p>
      </div>
    </div>

  </div>
</div>

      {/* SKILLS */}
      <div className="about-card">
  <h2>Technical Skills</h2>

  <div className="skills-two">

    <div className="skill-box">
      <h4>Operating System</h4>
      <p>Windows XP, Vista, Windows 7</p>
    </div>

    <div className="skill-box">
      <h4>Drafting Package</h4>
      <p>Auto CAD (2010-2014 Versions)</p>
    </div>

    <div className="skill-box">
      <h4>Modelling Package</h4>
      <p>Modelling Package: Solid Works (2009-2013 Versions)</p>
    </div>

    <div className="skill-box">
      <h4>Analysis Software</h4>
      <p>ANSYS (12-14.5 Versions) ANSYS ICEM CFD</p>
      <p>ANSYS Fluent, ANSYS CFD Post, Comsol 4.4</p>
    </div>

    <div className="skill-box">
      <h4>Sheet Metal CAM Software</h4>
      <p>MEDA CAM</p>
    </div>

    <div className="skill-box">
      <h4>Optimization Software</h4>
      <p>MINITAB,RSM,ANN techniques</p>
    </div>

    <div className="skill-box">
      <h4>Accounting Software</h4>
      <p>MS-Excel 2007-10, Tally</p>
    </div>

    <div className="skill-box">
      <h4>Documenting Software</h4>
      <p>Nitro PDF, Origin Lab, and Math CAD</p>
      <p>End Note, Chart Maker, Flash, Photo shop</p>
    </div>

  </div>
</div>
 
    <div className="about-card">
  <h2>Personal Details</h2>

  <div className="personal-details">
    <p><strong>Father's Name:</strong> G. Madeswaren</p>
    <p><strong>Mother's Name:</strong> M. TamilSelvi M</p>
    <p><strong>Date of Birth:</strong> 18-05-1988</p>
    <p><strong>Sex:</strong> Male</p>
    <p><strong>Marital Status:</strong> Married</p>
    <p><strong>Nationality:</strong> Indian</p>
    <p><strong>Languages Known:</strong> English, Tamil ,Telegu (Read & Write)</p>
  </div>
</div>
<div className="about-card">
  <h2>Extracurricular Activities</h2>

  <ol className="extra-list">
    <li>Soccer team captain for Zonal and District Matches during Secondary School Education.</li>
    <li>Leader of House during Secondary School Education</li>
    <li>Member in the Industry Board of Studies for the Department of Mechatronics 
Engineering, Mahendra Engineering College for the Year 2016 – 2018.</li>
    <li>Sports Secretary during Secondary School Education.</li>
    <li>Alumni coordinator for (batch 2006 – 2010) Mechanical Engineers Association from 2010 
to till date at Nandha Engineering College, Perundurai, Erode.</li>
    <li>Actively coordinated and participated, and got “ISO -9001-2015 ” by creating and 
documenting work for the Indian standard of organization peer team who had visited 
Department of Mechanical Engineering and Teja Tech and Design Solutions ,Erode</li>
    <li>Lieutenant in Junior RED Cross Secondary School Education.</li>
    <li>Student Council Member for a period of three years at Nandha Engineering College, 
Perundurai, Erode</li>
  </ol>
</div>
    </section>
  );
}

export default About;