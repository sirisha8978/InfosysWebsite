import "./Services.css";
import React, { useState } from "react";

const Services = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  return (
    
    <div className="services-page">
      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Overlay */}
        <div className="overlay"></div>
        {/* NAVBAR */}
        <nav className="navbar"> 
          {/* LEFT */}
          <div className="logo-section">
            <div 
              className="menu-icon"
              onClick={() => setShowSidebar(true)}
             >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2 className="logo">Infosys</h2>
          </div>
          
          {/* CENTER NAV */}
          <ul className="nav-links">
            <li>Navigate your next</li>
            <li>Investors</li>
            <li>Infosys Knowledge Institute</li>
            <li>Careers</li>
          </ul>

          {/* RIGHT BUTTON */}
          <button className="ask-btn">Ask AI</button>
        </nav>

   {/* SIDEBAR */}
  <div className={`sidebar ${showSidebar ? "active" : ""}`}>

  {/* CLOSE BUTTON */}
  <div
    className="close-btn"
    onClick={() => setShowSidebar(false)}
  >
    ✕
  </div>

  {/* LEFT MENU */}
  <div className="left-menu">

    <ul>

      {/* HOME */}
      <li
        className={activeMenu === "home" ? "active-item" : ""}
        onClick={() => setActiveMenu("home")}
      >
        Navigate your next
      </li>

      {/* INDUSTRIES */}
      <li
        className={activeMenu === "industries" ? "active-item" : ""}
        onClick={() => setActiveMenu("industries")}
      >
        Industries
      </li>

      <li
        className={activeMenu === "services" ? "active-item" : ""}
        onClick={() => setActiveMenu("services")}
      >
      Services
      </li>

      <li
        className={activeMenu === "platforms" ? "active-item" : ""}
        onClick={() => setActiveMenu("platforms")}
      >
      Platforms
      </li>

      <li
        className={activeMenu === "knowledge" ? "active-item" : ""}
        onClick={() => setActiveMenu("knowledge")}
     >
      Infosys Knowledge Institute
     </li>

       <li
        className={activeMenu === "about" ? "active-item" : ""}
        onClick={() => setActiveMenu("about")}
      >
      About Us
      </li>

      <div className="bottom-links">
         <li
        className={activeMenu === "investors" ? "active-item" : ""}
        onClick={() => setActiveMenu("investors")}
      >
      Investors
      </li>

       <li
        className={activeMenu === "careers" ? "active-item" : ""}
        onClick={() => setActiveMenu("careers")}
      >
      Careers
      </li>
      
    <li
        className={activeMenu === "newsrooms" ? "active-item" : ""}
        onClick={() => setActiveMenu("newsrooms")}
      >
      Newsrooms
    </li>

     <li
        className={activeMenu === "blogs" ? "active-item" : ""}
        onClick={() => setActiveMenu("blogs")}
      >
       Blogs
     </li>  

      <li
        className={activeMenu === "contact us" ? "active-item" : ""}
        onClick={() => setActiveMenu("contact us")}
      >
     Contact Us
      </li>
      </div>

    </ul>

  </div>

  {/* RIGHT CONTENT */}
  <div className="right-content">

    {/* HOME PAGE */}
    {activeMenu === "home" && (

      <div>

        <h1>Navigate your next</h1>

        <div className="card-container">

          {/* BIG CARD */}
          <div className="big-card">

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt=""
            />

            <div className="card-overlay">

              <h2>
                Being resilient. That's live Enterprise.
              </h2>

              <a href="/">
                Know more ↗
              </a>

            </div>

          </div>

          {/* SMALL CARDS */}
          <div className="small-cards">

            <div className="small-card">

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div className="card-overlay">

                <h3>Digital core capabilities</h3>

                <a href="/">
                  Know more ↗
                </a>

              </div>

            </div>

            <div className="small-card">

              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt=""
              />

              <div className="card-overlay">

                <h3>Cloud transformation</h3>

                <a href="/">
                  Know more ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    )}

    {/* INDUSTRIES PAGE */}
    {activeMenu === "industries" && (

      <div>

        <h1>Industries</h1>

        <div className="industries-container">

          {/* COLUMN 1 */}
          <div className="industry-box">

            <p>Aerospace & Defense</p>
            <p>Agriculture</p>
            <p>Automotive</p>
            <p>Chemical Manufacturing</p>
            <p>Communication Services</p>
            <p>Consumer Packaged Goods</p>
            <p>Education</p>
            <p>Engineering Procurement & Construction</p>
            <p>Financial Services</p>
            <p>Oil and Gas</p>
            <p>Private Equity</p>
            <p>Professional Services</p>
            <p>Public Sector</p>

          </div>

          {/* COLUMN 2 */}
          <div className="industry-box">

            <p>Healthcare</p>
            <p>High Technology</p>
            <p>Industrial Manufacturing</p>
            <p>Information Services & Publishing</p>
            <p>Insurance</p>
            <p>Life Sciences</p>
            <p>Logistics & Distribution</p>
            <p>Media and Entertainment</p>
            <p>Mining</p>
            <p>Retail</p>
            <p>Semiconductor</p>
            <p>Travel and Hospitality</p>
            <p>Utilities</p>
            <p>Waste Management</p>
          </div>

        </div>

      </div>

    )}
    
     {/* SERVICES PAGE */}
            {activeMenu === "services" && (

              <div>

                <h1>Services</h1>

                <div className="services-grid">

                  {/* CARD 1 */}
                  <div className="service-box">

                    <h2>Insights</h2>

                    <hr />

                    <p>Infosys Topaz</p>
                    <p>Applied AI</p>
                    <p>Infosys Generative AI</p>
                    <p>Infosys Sustainability Services</p>

                  </div>

                  {/* CARD 2 */}
                  <div className="service-box">

                    <h2>Innovate</h2>

                    <hr />

                    <p>Blockchain</p>
                    <p>Engineering Services</p>
                    <p>Internet of Things (IoT)</p>

                  </div>

                  {/* CARD 3 */}
                  <div className="service-box">

                    <h2>Assure</h2>

                    <hr />

                    <p>Cyber Security</p>
                    <p>Quality Engineering</p>

                  </div>

                  {/* CARD 4 */}
                  <div className="service-box">

                    <h2>Accelerate</h2>

                    <hr />

                    <p>Enterprise Agile DevOps</p>
                    <p>API Economy & Microservices</p>
                    <p>Application Modernization</p>
                    <p>Cloud - Infosys Cobalt</p>
                    <p>Digital Process Automation</p>
                    <p>Digital Supply Chain</p>
                    <p>Microsoft Business Application Services</p>
                    <p>Microsoft Cloud Business</p>
                    <p>Oracle</p>
                    <p>SAP</p>
                    <p>Service Experience Transformation</p>
                    <p>Salesforce</p>
                    <p>Energy Transition</p>
                    <p>Network Transformation Services</p>
                    <p>Infrastructure Services</p>
                    <p>Global Capability Center (GCC)</p>

                  </div>

                  {/* CARD 5 */}
                  <div className="service-box">

                    <h2>Experience</h2>

                    <hr />

                    <p>Infosys Aster</p>
                    <p>Digital Marketing</p>
                    <p>Digital Commerce</p>
                    <p>Digital Interactions</p>
                    <p>Digital Workplace Services</p>
                    <p>Digital Experience</p>
                    <p>Infosys Metaverse Foundry</p>

                  </div>

                  {/* CARD 6 */}
                  <div className="service-box">

                    <h2>
                      Application Development
                    </h2>

                    <hr />

                    <p>Business Process Management</p>
                    <p>Business Process Management</p>
                    <p>Consulting Services</p>
                    <p>Incubating Emerging Offerings</p>

                  </div>

                </div>

              </div>

            )}

      {/* PLATFORMS PAGE */}
   {activeMenu === "platforms" && (

  <div>

    <h1>Platforms</h1>

    <div className="platforms-container">

      {/* COLUMN 1 */}
      <div className="platform-box">

        <p>EdgeVerve</p>
        <p>Infosys Finacle</p>
        <p>Infosys Live Enterprise Suite</p>
        <p>Infosys Cortex</p>
        <p>Infosys Meridian</p>

      </div>

      {/* COLUMN 2 */}
      <div className="platform-box">

        <p>Panaya</p>
        <p>Infosys Equinox</p>
        <p>Infosys Topaz Fabric</p>
        <p>Infosys Wingspan</p>
        <p>Infosys Helix</p>
        <p>Infosys Polycloud</p>

      </div>

     </div>

     </div>

    )}

     {/* KNOWLEDGE PAGE */}
{activeMenu === "knowledge" && (

  <div>

    <h1>Infosys Knowledge Institute</h1>

    <div className="knowledge-container">

      {/* LEFT BOX */}
      <div className="knowledge-box">

        <p>Overview</p>
        <p>Connect</p>
        <p>About Us</p>
        <p>Videos</p>

      </div>

      {/* RIGHT BOX */}
      <div className="knowledge-box">

        <h2>Learn</h2>

        <hr />

        <p>Research</p>
        <p>Perspectives</p>
        <p>Podcasts</p>

      </div>

    </div>

  </div>

  )}  

  {/* ABOUT PAGE */}
{activeMenu === "about" && (

  <div>

    <h1>About Us</h1>

    <div className="about-container">

      {/* LEFT BOX */}
      <div className="about-box">

        <p>Overview</p>
        <p>History</p>
        <p>ESG</p>
        <p>Management Profiles</p>
        <p>Meet Leon</p>
        <p>Infosys Knowledge Institute</p>
        <p>Infosys Stories</p>
        <p>Champions Evolve</p>
        <p>Infosys Springboard</p>

      </div>

      {/* RIGHT BOX */}
      <div className="about-box">

        <p>Subsidiaries</p>
        <p>Clients Speak</p>
        <p>Alliances</p>
        <p>Innovation Fund</p>
        <p>Infosys Innovation Network (IIN)</p>
        <p>Diversity Equity Inclusion</p>
        <p>Awards</p>
        <p>Analyst Reports</p>

      </div>

    </div>

  </div>

   )}
  
    </div>

  </div>

         {/* SERVICES DROPDOWN */}
        <div
         className="services-menu"
         onMouseEnter={() => setShowDropdown(true)}
         onMouseLeave={() => setShowDropdown(false)}
       >
   {/* SERVICES TEXT */}
  <div className="services-link">
    <span>Services</span>
    <span className="arrow">›</span>
  </div>

  {/* DROPDOWN BOX */}
  {showDropdown && (
    <div className="dropdown-box">

      <div className="column">
        <a href="/applied-ai">Applied AI</a>
        <p>API Economy & Microservices</p>
        <p>Application Development</p>
        <p>Application Modernization</p>
        <p>Blockchain</p>
        <p>Cloud-Infosys Cobalt</p>
        <p>Consulting Services</p>
        <p>Cyber Security</p>
        <p>Infosys Aster</p>
        <p>Enterprise Agile Devops</p>
        <p>Global Capability Center(GCC)</p>
      </div>

      <div className="column">
       <a href="/dataanalytics-ai">dataanalytics AI</a>
       <a href="/digital-commerce">DigitalCommerce </a>
       <a href="/digital-interaction">Digitalinteraction </a>
       <a href="/digital-experience">DigitalExperience </a>
       <a href="/digital-process-automation">DigitalProcessAutomation </a>
       <a href="/digital-supply-chain">DigitalSupplyChain </a>
       <a href="/digital-workplace-services">Digital Workplace Services </a>
       <a href="/infosys-metaverse">Infosys Metaverse </a>
       <a href="/infosys-generative-ai">Infosys Generative AI</a>
       <a href="/infosys-topaz">Infosys Topaz</a>
        <p>Infosys Sustainability Services</p>
        <p>Infrastruture Services</p>
      </div>

      <div className="column">
        <a href="/energy-transition">EnergyTransition </a>
        <a href="/engineering-services">EngineeringServices </a>
        <a href="/incubating-emerging-offerings">IncubatingEmergingOfferings </a>
        <a href="/quality-engineering">QualityEngineering</a>
        <a href="/microsoft-bussiness-application-services">Microsoft Bussiness Application Services</a>
        <a href="/microsoft-cloud-bussiness">Microsoft Cloud Bussiness</a>
        <a href="/network-transformation">Network Transformation</a>
        <a href="/oracle">Oracle</a>
        <a href="/salesforce">Salesforce</a>
        <a href="/sap">SAP</a>
      </div>

    </div>
  )}

    </div>
        {/* TITLE */}
        <div className="hero-content">
          <h1>Services</h1>
        </div>
        
      </section>

      {/* ABOUT SERVICES SECTION */}
    <section className="about-services">

      {/* LEFT SIDE */}
      <div className="about-left">
        <h1>About Services</h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="about-right">
        <p>
          Digital advancements and focus on customer centric business
          models is creating new opportunities for enterprises.
          Our digital architecture drives outcomes for enterprises
          across five areas – Experience, Insight, Innovate,
          Accelerate and Assure.
        </p>
       <a href="/">Learn more about our digital navigation framework.</a> 

      </div>
    </section>
    
    {/* WHAT'S HAPPENING SECTION */}

  <section className="whats-container">

  <h2 className="main-title">What's Happening</h2>

  <p className="sub-title">
    The latest in technology, thought leadership and customer stories
  </p>

  {/* CARDS */}
  <div className="cards-container">

    {/* CARD 1 */}
    <div className="news-card">

      <img
        src="https://tse3.mm.bing.net/th/id/OIP.nn0l8curRvE9IH7SzsV-TgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
        alt="AI"
      />

      <div className="card-content">

        <span className="tag">Press Release</span>

        <h2>
          Agentic AI Gains Traction: 86% of Enterprises See Rising Risks,
          Only 2%...
        </h2>

        <button className="read-btn">
          Read More ↗
        </button>

      </div>
    </div>

    {/* CARD 2 */}
    <div className="news-card">

      <img
        src="https://www.infosys.com/content/dam/infosys-web/en/global-resource/banner-images/energy-transition-now-mob.jpg"
        alt="Technology"
      />

      <div className="card-content">

        <span className="tag">Press Release</span>

        <h2>
          Infosys Collaborates with RheinEnergie to help Enterprises
          Drive their Energy...
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
          Our business solutions and services help accelerate
          innovation, increase productivity, reduce costs, and...
        </p>

        {/* ACTIVE MENU */}
        <div className="menu-box">
          <div className="blue-line"></div>
          <span>Experience</span>
        </div>

        {/* OTHER MENUS */}
        <div className="menu-text">Insight</div>
        <div className="menu-text">Innovate</div>
        <div className="menu-text">Accelerate</div>
        <div className="menu-text">Assure</div>
        <div className="menu-text">Application Developement and Maintenance</div>
        <div className="menu-text">Consulting Services</div>
        <div className="menu-text">Remaining Bussiness process Management</div>
      </div>

      {/* RIGHT SIDE */}
      <div className="offerings-right">

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt="technology"
        />

        {/* LINKS */}
        <div className="links-section">

          <div className="links-column">
            <a href="/">01. Infosys Aster</a>
            <a href="/">02. Digital Marketing</a>
            <a href="/">03. Digital Experience</a>
          </div>

          <div className="links-column">
            <a href="/">04. Digital Commerce</a>
            <a href="/">05. Infosys Metaverse Foundry</a>
            <a href="/">06. Digital Interactions</a>
          </div>

        </div>

      </div>

    </section>
    </div>

    <section className="success-section">

      {/* TOP */}
      <div className="success-top">

        <div>
          <h3>Case Studies</h3>
          <h1>Success Stories</h1>

          <p>
            Find out how we are enabling global enterprises to
            navigate their next by adapting to <br></br>changing technology,
            business and customer landscape.
          </p>
        </div>

        {/* ARROWS */}
        <div className="slider-buttons">

          <button className="arrow-btn light">
            ←
          </button>

          <span>1/4</span>

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
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="story"
          />
        </div>

        {/* CONTENT */}
        <div className="story-content">

          <span className="case-study">
            Case Study
          </span>

          <h2>
            Unified cloud infrastructure enhances digital...
          </h2>

          <p>
            A US-based pharmaceutical company with a presence in
            more than 50 countries operates 2,000+ websites hosted
            by 200...
          </p>

          <button className="know-more">
            Know More ↗
          </button>

        </div>

      </div>

    </section>
   
   <section className="insights-section">

      {/* TOP CONTENT */}
      <div className="insights-top">

        <h4>INSIGHTS</h4>

        <h1>Insights For You</h1>

        <p>
          Views and opinions of our thought leaders to shape
          business plans and customer experience
        </p>

      </div>

      {/* MAIN CONTENT */}
      <div className="insights-container">

        {/* LEFT IMAGE */}
        <div className="insights-image">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
            alt="Insights"
          />

        </div>

        {/* RIGHT CARDS */}
        <div className="insights-right">

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Transforming quality assurance organizations by enabling...
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Self-service testing: the antidote for stressed testing teams
            </h2>

            <a href="/">Read More ↗</a>

          </div>

          {/* CARD */}
          <div className="insight-card">

            <h2>
              Infosys Connected Device Testing: Driving quality engineering
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Performance testing of Internet Of Things(IoT)
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              The Future of Quality Engineering is with AI-assisted everything
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              Assuring the digital utilities transformation
            </h2>

            <a href="/">Read More ↗</a>

          </div>
          {/* CARD */}
          <div className="insight-card">

            <h2>
              An insight into Microservices testing strategies
            </h2>

            <a href="/">Read More ↗</a>

          </div>
        </div>

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

export default Services;