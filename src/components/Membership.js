import React from "react";
import "./Membership.css";
import scopus from "../assets/scoups.png";
import orcid from "../assets/orcid.png";
import wos from "../assets/webofscience.png";
function Membership() {
  return (
    <section className="membership">
       <div className="top-ads">

  <div className="ad-box">
    <img src={wos} alt="Web of Science" />
    <p>Scopus Author ID: 57202000286</p>
  </div>

  <div className="ad-box">
    <img src={orcid} alt="ORCID" />
    <a 
      href="https://orcid.org/0000-0002-8687-7887" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      https://orcid.org/0000-0002-8687-7887
    </a>
  </div>

  <div className="ad-box">
    <img src={scopus} alt="Scopus" />
    <a 
  href="https://www.webofscience.com/wos/author/record/JDV-8851-2023" 
  target="_blank" 
  rel="noopener noreferrer"
  className="ad-link"
>
  Web of Science Profile
</a>
  </div>

</div>
      <h1 className="membership-title">PROFESSIONAL MEMBERSHIPS</h1>

      <div className="membership-grid">

        <div className="membership-box">
          <h3>Indian Society of Mechanical Engineering (ISME)</h3>
          {/* <p>Life Member – ID: LM 63596</p> */}
        </div>

        <div className="membership-box">
          <h3>Indian Welding Society (IWS) – with lifetime validity</h3>
          {/* <p>Life Member – ID: 01122973</p> */}
        </div>

        <div className="membership-box">
          <h3>Indian Society of Technical Education [MISTE]</h3>
          {/* <p>Life Member</p> */}
        </div>

        <div className="membership-box">
          <h3>Institutes of Engineers (India)</h3>
          {/* <p>Professional Member</p> */}
        </div>

        <div className="membership-box">
          <h3>International Association Of Engineers (IAENG)</h3>
          {/* <p>Professional Member</p> */}
        </div>

        <div className="membership-box">
          <h3>International Society for Research and Development,London (ISRD)</h3>
          {/* <p>Professional Member</p> */}
        </div>

        <div className="membership-box">
          <h3>Technical Research Organization</h3>
          {/* <p>Professional Member</p> */}
        </div>

      </div>

    </section>
  );
}

export default Membership;