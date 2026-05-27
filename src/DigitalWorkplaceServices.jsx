

import React from "react";
import "./DigitalWorkplaceServices.css";

const DigitalWorkplaceServices = () => {
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

    <span>Digital Workplace Services</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h3 className="">
       <span>Services</span>
    </h3>

    <h1>Digital Workplace Services</h1>
    <p>Infosys' Digital Workplace Services helps organizations humanize their employees' workplace experiences and build a resilient enterprise by digitizing their hybrid workplaces, redesigning the physical workspaces and prioritizing organizational well-being.</p>

    <button className="read-btn">
      Read More ↗
    </button>

  </div>
  </section>

   {/* ABOUT SERVICES SECTION */}
    <section className="about-services">

      {/* LEFT SIDE */}
      <div className="about-left">
        <h2>Digital Workplace Services</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          Infosys Digital Workplace Services helps organizations achieve business agility by leveraging AI and next-generation technologies, improving productivity, and reducing costs while adhering to the principles of Responsible AI. We accelerate their #NextAtWork journey by co-creating personalized, inclusive, intelligent, and sustainable workspaces that fuel innovation and enhance superior employee experience. Our services and solutions promote device circularity and shared value, supporting business growth and contributing to a low-carbon future. Our AI-powered learning platforms equip the workforce with essential skills and competencies while providing knowledge management, change management, and social learning to foster a progressive workplace culture vital for an agile workforce. We ensure that Human + AI collaboration in the workplace not only augments human capabilities but also creates an inclusive and diverse work environment.
        </p>
      </div>
    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

      <p className="sub-title">
       Augmenting human potential with the right digital technologies
      </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/dws-spotlight-thumb.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Insight</span>

        <h2>
          DWS in Spotlight
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/digital-workplace-services-lead-mob.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">case study</span>

        <h2>
         Transforming Workplace: Success Stories from Digital Workplace Services
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
        <p>Derive more value from your workplace, faster with our range of offerings</p>

       {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
        <span>Segments</span>
        </div>
        
       </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/digital-experience7-mob.jpg"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. Digital Collaboration</a>
            <a href="/">02. Employee Experience</a>
            <a href="/">03. Digital Adoption & Learning</a>
          
            
          </div>

          <div className="links-column">
            <a href="/">05. Workplace Security</a>
            <a href="/">06. Connected Workspaces</a>
            <a href="/">07. Modern Endpoint & Device Management</a>
           
            
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
          Know how Infosys has redefined the future of work for clients
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
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/reimagining-workplace-thumb1.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
           Success Story
          </span>

          <h2>
           Remainining the Workplace : E ON'S Story Of User-Centric IT Transformation with Infosys
          </h2>

            <p>
             E.ON, a leading energy company, sought to create a modern workplace experience following a merger. Their goals were ambitious and challenges, mammoth:
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
        Build a resilient enterprise with a human-centric approach to workplace transformation
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/digital-workplace-services-insights.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
            Transforming Workplaces: Success Stories from Infosys Digital Workplace Services
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
            Navigating Cloud Security and Identity Management in the..
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
          Modern Workplace, Modern Possibilities
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
          GenAI Digital Knowledge Coworkers Powered by RAG

            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Next-Gen Elevator Emergency Call Handling
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Unlock New Possibilities with Infosys and Microsoft Copilot for..

            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Empowering the Workforce: How Agentic AI Drives Autonomy and Innovation in the Modern..
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
export default DigitalWorkplaceServices;