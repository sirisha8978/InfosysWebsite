import React from "react";
import "./NetworkTransformation.css";

const NetworkTransformation = () => {
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

    <span>Network Transformation</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h3 className="">
       <span>Network Transformation</span>
    </h3>

    <h1>Infosys Network <br></br>Transformation Services</h1>

    <p>
    Infosys Offers on Accelerated Path to the Network
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
        <h2>About Network Transformation</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
         Network infrastructure in an enterprise plays a critical role in accelerating digital transformation. Today, enterprises require secure, scalable, agile, and efficient network services that leverage advancements in artificial intelligence (AI), multi-cloud, and wireless technologies.

       Infosys Network Transformation Services, part of Infosys Cobalt, overhauls outdated networks, empowering businesses to drive cloud adoption, leverage AI and enable digital initiatives.
        </p>
      </div>
    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>
  
  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/enterprise-network-transformation.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Brochure</span>

        <h2>
          Build Secure, Scalable and Future-Ready Networks with Infosys
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/achieves-gold-provider.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">Feature</span>

        <h2>
        Infosys Achieves Cisco Gold Provider Status Worldwide
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
        <p>Infosys offerings for transforming network infrastructure</p>

        {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
        <span>Service Offerings</span>
        </div>
       
      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/partnering-planet.jpg"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. S.M.A.R.T. WAN</a>
            <a href="/">02. 5G Networks Readiness for Businesses</a> 
          </div>

          <div className="links-column">
            <a href="/">03. Agile LAN</a>
            <a href="/">04. Hybrid Data Center Network</a>
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
        Helping enterprises future-proof their network landscape
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
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/software-defined-infrastructure.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            case study
          </span>

          <h2>
           Digital Transformation Through Software Defined Infrastructure
          </h2>

            <p>
             A large multinational manufacturing company had challenges managing and governing disparate environments due to multiple mergers and acquisitions.
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
       Perspectives and best practices around network transformation
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/insights-network-transformation.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
               Infosys Enterprise Network Transformation Services
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys Intelligent Network Platform
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
             How 5G and Edge Computing Are Fueling Each Other’s Growth
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys and Cisco Partnership: Driving Innovation for Enterprises.
           </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Network Modernization in Energy and Utilities..
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             5G, Data, and the Future of Telecom with Sunrise’s CTO Elm...
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys Software-Defined LAN Offering Based on Aruba Edge Services Platform..
            </h2>

            <a href="/">Read More ↗</a>

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
export default NetworkTransformation;