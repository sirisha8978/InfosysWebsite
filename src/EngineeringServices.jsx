

import React from "react";
import "./EngineeringServices.css";

const EngineeringServices = () => {
  return (
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="hero-section">

  <div className="overlay"></div>

  <nav className="navbar">

    {/* LEFT */}
    <div className="logo-section">
      <div className="menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <h2 className="logo">Infosys</h2>
    </div>

    {/* CENTER */}
    <ul className="nav-links">
      <li>Navigate your next</li>
      <li>Investors</li>
      <li>Infosys Knowledge Institute</li>
      <li>Careers</li>
    </ul>

    {/* RIGHT */}
    <button className="ask-btn">Ask AI</button>

  </nav>

  {/* BREADCRUMB */}
  <div className="services-link">
    <span>Services</span>
    <span className="arrow">›</span>

    <span>Engineering Services</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h3 className="">
       <span>Engineering Services</span>
    </h3>

    <h1>Digital Engineering Services</h1>

    <p>
     At Infosys Engineering Services, we believe that products can functionally enable humans <br></br>to better understand their lives and interactions.
    </p>

    <button className="read-btn">
      Read More ↗
    </button>

  </div>
  </section>

   {/* ABOUT SERVICES SECTION */}
    <section className="about-services">

      {/* LEFT SIDE */}
      <div className="about-left">
        <h2>About Digital Engineering Services</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          Enterprises need resilient networks, digitally connected workforce, and smart connected products, to reorient their production to be more local and enable faster launch of new offerings. This requires massive engineering interventions in product design, software defined networking, robotics, IoT and containerization.
        </p>
      </div>
    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

      <p className="sub-title">
       Infosys Engineering Services –at the intersection of the physical and digital worlds
      </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/automobile.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Report</span>

        <h2>
          Automotive Industry Outlook 2025
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/in-tech-transformation.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">WhitePaper</span>

        <h2>
         in-tech – A Company in Transformation, Surrounded by an Industry in Transformation: Heritage, Current Market Forces and Future Ambitions
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

  </div>
  </section>
     
    <div className="offerings-wrapper">
     <section className="offerings-section">

      {/* LEFT SIDE */}
      <div className="offerings-left">

        <h1>Our Offerings</h1>
        <p>Discover range of service offerings for various Engineering Services</p>

        {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
        <span>Services Offerings</span>
        </div>
       
      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/semiconductor-industry.jpg"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. Internet of Things (IoT)</a>
            <a href="/">02. Infosys Engineering Cloud</a>
            <a href="/">03. Infosys Digital Thread Services</a>
           </div>

          <div className="links-column">
            <a href="/">04. Robotics and Autonomous Systems</a>
            <a href="/">05. Medical Device Engineering</a>
            <a href="/">06. Infosys Next-Gen Mobility Services</a>
          </div>

        </div>

      </div>

    </section>
    </div>

    <section className="success-section">

      {/* TOP */}
      <div className="success-top">

        <div>
          
          <h1>Client Success Stories</h1>

          <p>
           Know how Infosys helps its clients realize their business potential
          </p>
        </div>

        {/* ARROWS */}
        <div className="slider-buttons">

          <button className="arrow-btn light">
            ←
          </button>

          <span>1/2</span>

          <button className="arrow-btn dark">
            →
          </button>

        </div>

      </div>

      {/* CARD */}
      <div className="story-card">

        {/* IMAGE */}
        <div className="story-image">
          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/integrated-single-source-thumb.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            Testimonials
          </span>

          <h2>
          AFRY - An Integrated Single Source of Truth Across IT, OT and ET
          </h2>

            <p>
            This article focuses on AFRY’s process industry business and how the two companies partnered to deliver an IT-OT-ET integrated "single source of truth," assuring data integrity from the time of initial engineering and construction and across all the plant lifecycle stages
            </p>

          <button className="know-more">
            Read More ↗
          </button>

        </div>

      </div>

    </section>
   
   <section className="insights-section">

      {/* TOP CONTENT */}
      <div className="insights-top">


        <h1>Insights For You</h1>

        <p>
         Here are Some Examples of How We’re Bringing Together the Best of Mechanical, Electronics and Software Engineering
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/digital-experience-insights.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
             Semiconductor Industry Outlook 2025

            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
           Engineering Autonomous Networks
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
           Infosys Wins Spirit AeroSystems’ Supplier Innovation Award
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Driving the Future: The state of autonomous vehicles

            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Wings of Innovation: Transforming Aircraft MRO with Infosys
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Revolutionizing Healthcare through connected medical devices
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys Digital Thread
            </h2>

            <a href="/">Read More ↗</a>

          </div>
        </div>

      </div>

    </section>
    
      <section className="awards-section">

      {/* TOP CONTENT */}
      <div className="awards-top">

        <div>
          <h1>Analyst & Recognitions</h1>

          <p>
           Here's what several independent industry analysts, experts and observers have to say.
          </p>

          <a href="/">Show More ↗</a>
        </div>

        {/* SLIDER BUTTONS */}
        <div className="slider-buttons">
          <button className="prev-btn">←</button>

          <span>1 / 3</span>

          <button className="next-btn">→</button>
        </div>

      </div>

      {/* CARDS */}
      <div className="cards-container">

        {/* CARD 1 */}
        <div className="award-card">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/company-transformation-surrounded.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
              in-tech – A Company in Transformation, Surrounded by an Industry in Transformation: Heritage, Current Market Forces and Future Ambitions
            </h3>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="award-card">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/worldwide-software-engineering-anlyst.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
              Infosys is a Leader in the IDC MarketScape for Worldwide Software Engineering Services 2023
            </h3>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="award-card">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/5g-engineering-services.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
              Infosys is a Leader in Everest Group’s 5G Engineering Services PEAK Matrix® Assessment 2023
            </h3>
          </div>

        </div>

      </div>

    </section>

   <section className="request-section">
      
      {/* LEFT CONTENT */}
      <div className="request-left">
        <h1>
          Request for <br /> services
        </h1>

        <p>
          Find out more about how we can help your organization
          navigate its next. Let us know your areas of interest
          so that we can serve you better.
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="request-form-box">

        <h3>
          All the fields marked with * are required
        </h3>

        <form className="request-form">

          <div className="form-grid">

            <input type="text" placeholder="First Name *" />
            <input type="text" placeholder="Last Name *" />

            <input type="email" placeholder="Email *" />
            <input type="text" placeholder="Company *" />

            <input type="text" placeholder="Job Title *" />
            <input type="text" placeholder="Phone" />

          </div>

          <textarea
            placeholder="Message"
            rows="3"
          ></textarea>

          {/* CHECKBOXES */}

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              Opt in for marketing communication
              <a href="/"> Privacy Statement</a>
            </span>
          </label>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>
              I agree to the
              <a href="/"> Privacy Statement *</a>
            </span>
          </label>

          <button type="submit" className="submit-btn">
            Submit ↗
          </button>

        </form>
      </div>
    </section>
    
    <footer className="footer">
      <div className="footer-container">

        {/* COLUMN 1 */}
        <div className="footer-column">
          <h3>Subsidiaries</h3>

          <a href="/">EdgeVerve Systems</a>
          <a href="/">Infosys BPM</a>
          <a href="/">Infosys Consulting</a>
          <a href="/">Infosys Public Services</a>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-column">
          <h3>Programs</h3>

          <a href="/">Infosys Foundation</a>
          <a href="/">Infosys Foundation USA</a>
          <a href="/">Infosys Science Foundation</a>
          <a href="/">Infosys Leadership Institute</a>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="/">About Us</a>
          <a href="/">Investors</a>
          <a href="/">Navigate your next</a>
          <a href="/">Careers</a>
          <a href="/">ESG</a>
          <a href="/">Newsroom</a>
          <a href="/">Alumni</a>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-column">
          <h3>Support</h3>

          <a href="/">Terms of Use</a>
          <a href="/">Privacy Statement</a>
          <a href="/">Cookie Policy</a>
          <a href="/">Safe Harbour Provision</a>
          <a href="/">Site Map</a>
          <a href="/">Modern Slavery Statement</a>
          <a href="/">Payment Guide for Suppliers</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

       <div className="social-icons">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-x-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>

        <p>Copyright © 2026 Infosys Limited</p>

      </div>
    </footer>

  </div>
  );
};
export default EngineeringServices;