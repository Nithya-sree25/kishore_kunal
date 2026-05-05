import React from "react";
import "./About.css";
import profile from "../assets/sir_photo.png";  // add your image

function About() {
  return (
    <section className="about">

      {/* PROFILE IMAGE */}
      <div className="about-header">
        <img src={profile} alt="profile" />
        <h1>About Dr.KISHORE KUNAL</h1>
      </div>

      {/* SUMMARY */}
      {/* <div className="about-card">
        <h2>Summary</h2>
        <p>
          A dynamic professional with over 15 years of versatile experience spanning mechanical design,
          CFD, welding technology, and renewable energy systems. Bringing a unique blend of academic
          expertise and industrial insight. Currently serving as Associate Professor and actively
          engaged in research, mentoring, and innovation.
        </p>
      </div> */}

      {/* EXPERIENCE */}
      <div className="about-card">
        <h2>Professional Experience</h2>
        <p>
          Total Professional Experience: 21Years (5 years Teaching, 16 Years in Corporate)
        </p>
        <p>
          <strong>Dean of Online Program ( Professor- Business Analytics) 
          Loyola Institute of Business Administration (LIBA), Chennai 
          (Oct’20-till date)</strong>
          
          <ul>
            <li>
              Enabling the digital transformation of LIBA through various online tools and platforms
            </li>
            <li>
              Heading IIC and incubated 8 start-ups which are in GTM phase
            </li>
            <li>
              Handheld Startups with Angel network
            </li>
            <li>
              Mentored 20 DBA international students at SSBM, Geneva, Switzerland
            </li>
            <li>
              Drive online programs for domestic and international markets through effective curriculum strategy for 
aspiring professionals
            </li>
            <li>
              Running & maintaining effective Campaigns using social media platform, customer business areas and identify 
areas of service improvements
            </li>
            <li>
              Teaching AI& ML courses for MDC & Full-time students through real case based scenarios.
            </li>
            <li>
              Teaching Data Science at Loyola College Chennai and Part of Internal Audit committee of NAAC visit across 
departments.
            </li>
            <li>
              Contributing to strategic inputs on Incubation council for budding entrepreneurs to produce “sustainable” 
company, identifying changes in market demand and modifying strategies for expansion of LIBA in this Space
            </li>
            <li>
              Promoting Entrepreneurs in Residence concept through this channel
            </li>
            <li>
              Part of Admission team to attract best talents from the country, diversifying LIBA presence 
to other parts of India
            </li>
            <li>
              Managing relationship with LIBA alumni by organizing workshop and Back to School 
Program.
            </li>
          </ul>
        </p>

        <p>
          <strong>Co-Founder & Business Head 
Anchal Technovations Pvt Ltd & Dragonlearn.in (A subsidiary of uchi.ru Russian firm) (Dec’16-July’ 20)</strong>
          <p>Job Responsibilities:</p>
          <ul>
            <li>
              Conceptualizing and managing the development of Mobile Games, and Skill Platform for edu start 
up DRAGONLEARN Working on
            </li>
            <li>
              P& L owner & Drive all Revenue generating lines on B2B, B2C business through effective product strategy for 
frontend and backend products to ensure higher usage & penetration levels
            </li>
            <li>
              Conceptualizing, implementing and deploying a very innovative skill platform for parents and 
Students for Class KG till 12th
            </li>
            <li>
              Exploring business opportunities and work closely with various state government ministries for skill sectors
            </li>
            <li>
              Create & Implement “ at Scale” operating model of the roll out of DDUGKY Centers.
            </li>
            <li>
              Provide Operational Leadership to 80 members team managing 4 centers located 4 across states under 
DDUGKY and NSDC Ecosystem of Skill Development
            </li>

          </ul>
        </p>
        <p>
          <strong>Marketing Head:  
Reliance Communications (Bihar & Jharkhand)  (May’11– Nov’16)</strong>
<p>Job Responsibilities:</p>
          <ul>
            <li>
              Responsible for delivering Voice & Data usage revenue, tertiary & subscribers target along with RMS, TMS & CMS 
for product lines – Data, VAS verticals in GSM & CDMA technology
            </li>
            <li>
             Drive all Revenue generating lines on Data prepaid, postpaid, U&R, VAS, & roaming business through effective product 
strategy for frontend and backend products to ensure higher usage & penetration levels
            </li>
            <li>
              Analyzing the performance of existing/launched products by fulfillment of revenue KPIs like Data Usage, 
decrement, Realized Rate, ARPU, recharge adoption to enhance customer usage and revenues
            </li>
            <li>
             Handling the team of 100 members for effective communication to the market and building the necessary skill sets 
within the team by tasking and guiding to enhance team productivity
            </li>
            
          </ul>
        </p>
         <p>
          <strong>Manager: VAS Products (SMS & Data ) 
Idea Cellular Limited, Ahmedabad   (Oct 10– Apr-11)</strong>
          <ul>
            <li>
              Responsible for driving revenue of Rs 10 Cr from the existing base by ensuring healthy base by controlled churn & 
healthy acquisition.
            </li>
            <li>
             New product development (chat App on SMS) for market leadership & future growth in Idea Cellular
            </li>
            <li>
              Launched 3G service in Gujarat Circle
            </li>
                       
          </ul>
        </p>
         <p>
          <strong>Manager: Products and Operations (International) 
One97 Communication Pvt Ltd, Noida   (Jan 09– Sept 10)</strong>
          <p>Product Development</p>
          <ul>
            <li>
              Develop new product rollout, roadmap and contribute in driving revenues from new products like Music portal,Mkisan portal, Voice chat services and WAP portal.
            </li>
            <li>
             Working on the Product launch of an e-commerce portal for digital videos, wallpapers for the Web as well as WAP 
storefronts. Work includes deciding on Product Mix, Channel strategy, pricing strategy and deciding on promotional 
content by working closely with content experts.
            </li>
                 
          </ul>
        </p>
        <p>
          <strong>Associate Product Manager: Product Development Group  
Tanla Solutions Limited, Hyderabad   (June 08– Dec 08)</strong>
          <p>Product Management</p>
          <ul>
            <li>
              Conceptualized and managed the development of Tanla CRM, Tanla Number Game, Billing and statistics module
            </li>
            <li>
             Worked on extensive research for competitor analysis for the web/wap digital music download space.
            </li>
            <li>
              Accomplished Customer Relationship Management [CRM] skills and experience at all levels of business
            </li>
            <li>
              Acting as SPOC for all Asia Pacific based custom development projects
            </li>
          </ul>
         </p>
         <p><strong>
          Dongseo University – South Korea (in Association with SK Telecom and NTT Docomo)   (October 2004 – Apr 2007)</strong>
          <p>
            Research Analyst
          </p>
          <ul>
            <li>
                Devised Market Research strategy to market Solutions to Business Customers for pet watch dogs (3G Product)
            </li>
            <li>
              Created Ideal Customer Profile
            </li>
            <li>
              Consumer Behavior
            </li>
          </ul>
          </p>
       
      </div>
        <div className="about-card">
            <h2>Teaching experience</h2>
            <ul className="teaching">
              <li>
                Full Time Faculty at LIBA & Loyola College Chennai (A Jesuit Business School) for Business Analytics & AI ML 
Courses. Number of Students 2500 and Generating revenue of Rs 15 Cr per year.
              </li>
              <li>
                Teaching Big data, Management Information System, NLP ,Data Science to full time students and Week End students 
of LIBA
              </li>
              <li>
                DBA Guide at SSBM, Geneva, Switzerland
              </li>
              <li>
                Visiting Professor of Practice at Golden Gate University, Sanfrancisco
              </li>
              <li>
                Mentoring 20 DBA International students at SSBM, Geneva Switzerland. All of my students are having average 14 years of corporate experience and more.
              </li>
              <li>
                Research Topics included GAN, AI & ML in Business & other service sectors, Startup, Blockchain
              </li>
              <li>
                Visiting Faculty for Product Management in GLA University, Mathura & GGU, Sanfranciso
              </li>
            </ul>
        </div>
      {/* TIMELINE */}
      <div className="about-card">
  <h2>Professional History</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Oct 2020 – Present</h4>
        <p><strong>LIBA Chennai</strong></p>
        <p>Professor and Dean – Online Program</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Jun 2021 – Present</h4>
        <p><strong>LIBA Chennai</strong></p>
        <p>Convener – IIC</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Nov 2016 – Jul 2020</h4>
        <p><strong>ANTECH & DRAGONLEARN.IN</strong></p>
        <p>CEO & Co-founder</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>May 2011 – Nov 2016</h4>
        <p><strong>Reliance Communications Ltd., Mumbai</strong></p>
        <p>Marketing Head</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Oct 2010 – May 2011</h4>
        <p><strong>Idea Cellular Ltd, Ahmedabad</strong></p>
        <p>VAS Manager</p>
      </div>
    </div>

     <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Jan 2009 – Sep 2010</h4>
        <p><strong>One97 Communications (Paytm)</strong></p>
        <p>Product Head</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>May 2008 – Jan 2009</h4>
        <p><strong>Tanla Solutions, Hyderabad</strong></p>
        <p>Associate Product Manager</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="circle"></div>
      <div className="content">
        <h4>Oct 2004 – Apr 2007</h4>
        <p><strong>3B System, South Korea</strong></p>
        <p>Research Analyst</p>
      </div>
    </div>

  </div>
</div>

    
 
    <div className="about-card">
  <h2>Personal Details</h2>

  <div className="personal-details">
    <p><strong>Date of Birth:</strong> 21.12.1981</p>
    <p><strong>Sex:</strong> Male</p>
    <p><strong>Marital Status:</strong> Married</p>
    <p><strong>Nationality:</strong> Indian</p>
   
  </div>
</div>

    </section>
  );
}

export default About;