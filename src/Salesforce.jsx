import React from "react";
import "./Salesforce.css";

const Salesforce = () => {
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

    <span>Salesforce</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h1>Scale New Summits with Infosys Salesforce Practice</h1>

    <p>
     Infosys Salesforce service offerings deliver superior experience to your customers, employees, and partners. We leverage innovative multi-cloud solutions
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
        <h2>About Salesforce</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          The Infosys Salesforce practice is a leading provider of Salesforce consulting and advisory services. As a part of Infosys Cobalt, we help enterprises across industries and channels achieve their business objectives. With our advanced concept-to-creation capabilities and a culturally diverse team operating in over 50 countries, we deliver hyper-personalized, immersive, proactive, predictive, and memorable human experiences.
        </p>
      </div>
    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

  <p className="sub-title">
    Action never stops at Infosys Salesforce practice. Catch all the latest news here.
  </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/cmo-radar-2024.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Report</span>

        <h2>
        Infosys CMO Radar 2024
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/platform-based-selling.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">Testomonial</span>

        <h2>
         Palo Alto Networks Partners with Infosys to Create a Unified, Platform-Based Selling Experience
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

        <p>
         Vertical-specific, multi-cloud solutions to innovate and create more value with Salesforce-powered
        </p>

        {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
        <span>Solutions</span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/25/banner/achieves-business-resilience-mob.jpg"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. Infosys AgilePro- A smart development platform</a>
            <a href="/">02. Infosys CarePlus, a preventive care-as-a-service platform</a>
            <a href="/">03. Infosys Channel Partner Solution </a>
            <a href="/">04. Infosys Salesforce Consumer Goods, Retail and Logistics Offerings</a>
          </div>

          <div className="links-column">
            <a href="/">05. Infosys Customer Advocacy </a>
            <a href="/">06. Infosys Code Coverage Manager</a>
            <a href="/">07. Infosys Energy Management Solution </a>
            <a href="/">08. Infosys Driver and Vehicle Solution</a>
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
          Hear from our esteemed customers on how Infosys empowers businesses with Salesforce at the core.
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
            src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/18/digital-transformation-partner-implementing-salesforce.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            Testimonial
          </span>

          <h2>
           CBHS selects Infosys as their digital transformation partner for implementing Salesforce
          </h2>

          <p>
           CBHS Health Fund is a Not-for-profit Private Health Insurance for current and former CBA group employees and their families.
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
         Perspectives on key trends shaping Customer Experience
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/salesforce-insights.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Customer-Centric Airlines Soar High
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              CX Market Musings: An Infosys Perspective on the Salesforce
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
             Building Change Agility and De-risking Delivery for Salesforce with Panaya Foresight..
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              How to Use Data to Create Better Customer Experiences
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Building Digital Headquarters with Salesforce and Slack for Hybrid Workforces
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Leaders Talk: Reimagine Customer Experience with SaaS Platforms
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys is a Leader in NelsonHall NEAT Assessment for Salesforce
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
          <h1>Awards & Recognitions</h1>
          <p>Here's what several independent industry analysts, experts and observers have to say.</p>
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
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/vendor-evaluation.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
              Infosys is a Leader in NelsonHall NEAT Assessment for Salesforce Services
            </h3>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="award-card">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ecosystem-leader-us-germany.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
             Infosys is a Leader in IDC MarketScape: Asia/Pacific Salesforce Implementation Services 2022 Vendor Assessment
            </h3>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="award-card">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ecosystem-leader-us-germany.jpg"
            alt=""
          />

          <div className="card-content">
            <h3>
             Salesforce clients must recognize Infosys’ growing Salesforce capability – Point of view by HFS Research
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

export default Salesforce;