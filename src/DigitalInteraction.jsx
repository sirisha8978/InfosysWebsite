
import React from "react";
import "./DigitalInteraction.css";

const DigitalInteraction = () => {
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

    <span>Digital Interaction</span>
    <span className="arrow">›</span>
  </div>

  {/* HERO CONTENT */}
  <div className="ai-content">

    <h3 className="">
       <span>Digital Interaction</span>
    </h3>

    <h1>Digital Interaction</h1>

    <p>
      Learn About a robust experience orchestration across all channels of engagement. 
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
        <h2>About Digital Interaction</h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          Infosys Digital Interactions enables enterprises to digitize the core and offer a robust experience orchestration across all channels of engagement. With the rapid advancements in the UI technologies, we help enterprises to stay relevant, all the while future proofing their technology investments and enhancing their time-to market.
        </p>
      </div>
    </section>

    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

      <p className="sub-title">
       Innovative digital interventions aligned to your needs
      </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/strategic-collaboration-turbocharge-marketing-transformation.jpg"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Press Release</span>

        <h2>
          Infosys and Adobe Announce Strategic Collaboration to Turbocharge Marketing Transformation with AI
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/launched-ai-amplified-marketing-suite.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">video</span>

        <h2>
          Launched today: Infosys Aster™ – The AI-amplified marketing suite that delivers engaging brand experiences, enhanced marketing efficiency, and accelerated business growth
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
          Digital Interactions will be the central choreographer for integrated ecosystem. We help build the ‘Moments that matter’ navigating towards:
        </p>

      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.qntCFUHANRP6vrqWZzri1QHaEO?rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. Building compelling customer experiences</a>
            <a href="/">02. Building the Next-gen digital enterprise</a>
            <a href="/">03. Digital disruption</a>
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
            Our success stories where we have provided immersive end-customer engagement.
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
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/tap-find-tool.jpg"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            Case Study
          </span>

          <h2>
            Digitizing the core mobile first- self service capability
          </h2>

            <p>
               Tab, Find Tool, Place order.
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
          Building the moments that matter
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://www.infosys.com/content/dam/infosys-web/en/2025/thumbnails/digital-interaction-insights.jpg"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
             Evolution of portals and digital experience platforms
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
             Infosys Cobalt - Accelerating Enterprise Cloud Journey
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Building Digital Startup Platforms

            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Stand out from the crowd by providing unique and memorable customer experience
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
            Customer experience for retail industry
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Customer experience technology constructs for telecom clients

            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
             Personalized approach to customer experience
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
export default DigitalInteraction;