import React from "react";
import "./SAP.css";

const SAP = () => {
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

    <span>SAP</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h1>SAP End-to-End Consulting<br></br> to Build Truly Intelligent<br></br> Enterprise</h1>

    <p>
     Infosys Offers SAP end-to-end consulting, implementation, and support services,utilizing industry expertise <br></br>and methods to acheive digital transformation
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
        <h2>About SAP</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          Infosys’ AI-powered SAP solutions redefine enterprise transformation – accelerating clean core adoption, optimizing operations, and fueling intelligent, data-driven growth for resilient futures. As a RISE with SAP Validated Partner, we simplify your migration to SAP S/4HANA and unlock the full potential of the SAP Business Technology Platform (SAP BTP), enabling cloud-powered expansion with lasting impact.
        </p>
      </div>
    </section>

     <section className="success-section">

      {/* TOP */}
      <div className="success-top">

        <div>
          
          <h1>Client Success Stories</h1>

          <p>
            Empowering enterprises through technology and innovation
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
            src="https://www.infosys.com/content/dam/infosys-web/en/new-design25/assets/case-studies-rec-img-8.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            case study
          </span>

          <h2>
            Modernization of the SAP Landspace by Migrating to SAP HEC....
          </h2>

          <button className="know-more">
            Read More ↗
          </button>

        </div>

      </div>

    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

  <p className="sub-title">
    Perspectives and insights on the latest trends
  </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/ai-customer-engagement-platform.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Video</span>

        <h2>
        Joanna Milliken,CEO of SAP Emarsys Talks Strategy,Innovation & Human
        </h2>

        <button className="read-btn">
          Watch Video ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/accelerates-kardex-success-mob-ai.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">Video</span>

        <h2>
          Infosys Accelerates Kardex's Success with RISE with SAP
        </h2>

        <button className="read-btn">
          Watech Video ↗
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
         Unlock business value with wide range of services and methodologies
        </p>

        {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
        <span>S/4 HANA Offerings</span>
        </div>

        {/* OTHER MENUS */}
        
        <div className="menu-text">SAP Line of Bussiness Offerings</div>
        <div className="menu-text">SAP on Cloud</div>
        <div className="menu-text">SAP Industry Offerings</div>
       
      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/cloud-erp-services.jpg"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. SAP AMS</a> 
          </div>

          <div className="links-column">
            <a href="/">02. SAP Conversion </a>
          </div>

        </div>

      </div>

    </section>
    </div>

   <section className="insights-section">

      {/* TOP CONTENT */}
      <div className="insights-top">

        <h4>INSIGHTS</h4>

        <h1>Insights For You</h1>

        <p>
         Understand how to digitize your core to become a truly digital enterprise
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/insights-sap.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Infosys Emerges as a Winner in SAP Achievement in Customer
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Panel Discussion: #SpotittoStopit | Building a more Inclusive and
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Transforming Customer Engagement with AI and Data
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              SAP Idea Exchange
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Driving the ESG Agenda with SAP in the CPG Industry
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Tool-based Governance Framework for SAP S/4HANA
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Reimagining SAP S/4HANA Transformation
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

          <p>
            Here's what several independent industry analysts,
            experts and observers have to say
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200"
            alt=""
          />

          <div className="card-content">
            <h3>
              Double Win for Infosys Topaz at CogX; Bags
              ‘Enterprise Adoption of AI’ Award for Second Consecutive Year
            </h3>
          </div>

        </div>

        {/* CARD 2 */}
        <div className="award-card">

          <img
            src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?q=80&w=1200"
            alt=""
          />

          <div className="card-content">
            <h3>
              Infosys Positioned as a Leader in the IDC
              MarketScape: Worldwide Artificial Intelligence
              Services 2023 Vendor Assessment
            </h3>
          </div>

        </div>

        {/* CARD 3 */}
        <div className="award-card">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
            alt=""
          />

          <div className="card-content">
            <h3>
              Team Infosys Displays Programming Capabilities
              at Google AI4Code Challenge
            </h3>
          </div>

        </div>

      </div>

    </section>
    
    <section className="voice-section">
  {/* Header */}
  <div className="voice-header">
    <h2>Voice of the Customer</h2>

    <div className="slider-controls">
      <button>
        ❮
      </button>

      <span>1 / 2</span>

      <button className="active-btn">
        ❯
      </button>
    </div>
  </div>

  {/* Cards */}
  <div className="cards-wrapper">

    {/* Card 1 */}
    <div className="voice-card">
      <div className="card-inner">
        <div className="quote-icon">❝</div>

        <p>
          We led a consortium of partners to demonstrate how data
          analytics, blockchain, Internet of Things and AI models
          can help predict demand and streamline business trading
          and procurement process.
        </p>

        <div className="user-info">
          <div className="user-icon">👤</div>

          <div>
            <h4>Jane Cole</h4>
            <span>
              Director, Head of Product Management
            </span>
            <span>Westpac Institutional Bank</span>
          </div>
        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="voice-card">
      <div className="card-inner">
        <div className="quote-icon">❝</div>

        <p>
          As one of the early adopters of AI, getting started,
          converting ideas into real business cases and scaling AI
          applications across enterprise functions were the
          challenges.
        </p>

        <div className="user-info">
          <div className="user-icon">👤</div>

          <div>
            <h4>Kallol Dutta</h4>
            <span>
              General Manager of Data, AI & Automation
            </span>
            <span>Spark NZ</span>
          </div>
        </div>
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

export default SAP;