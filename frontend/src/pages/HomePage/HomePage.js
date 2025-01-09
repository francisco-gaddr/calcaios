import './HomePage.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/Button/Button';


import { useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path); // For internal routes
  };

  return (
    <div className="home-page">
      
      <section className="landing-section">
        <Navbar />
        <div className="landing-section-content">
          <h1>Calcaios: Power your data with AI</h1>
          <p>
            Automate calculatons, manage big-data, and visualize insights 
            effortlessly with <b> Calcaios </b>, the ultimate AI-driven 
            data management platform.
          </p>
          <div className="cta-buttons">
            <Button variant="primary" >
              <b>Book a Demo</b>
            </Button>
            <Button variant="primary" onClick={() => handleClick('/Signup')}>
              <b>Get Started</b>
            </Button>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-content">
          <h1>Revolutionize how you manage data</h1>
          <p>
            Calcios is designed to empower professionals of all levels 
            to handle complex data management tasks with ease. From advanced 
            calculations and financial oversight to big data analysis, our 
            AI-powered platform simplifies it all. Whether you're a business 
            owner, financial analyst, or researcher, Calcios helps you stay on 
            top of your data—efficiently and accurately.
          </p>
        </div>
      </section>

      <section className="features-section">
        <div className="features-section-content">
          <p>
            What <b>Calcaios</b> offers
          </p>
          <div className="feature-grid">
            <div className="feature-card">
              <img src="/path-to-your-image.png" alt="Data Upload" />
              <div className="feature-card-content">
                <h3>AI-Powered Calculations</h3>
                <p>
                  Automate complex calculations with our advanced AI tools,
                  saving you time and reducing errors.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/path-to-your-image.png" alt="Analysis" />
              <div className="feature-card-content">
                <h3>Budgeting and Financial Oversight</h3>
                <p>
                  Track expenses, generate budgets, and receive real-time 
                  insights on your financial data.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/path-to-your-image.png" alt="Visualization" />
              <div className="feature-card-content">
                <h3>Big Data Visualization</h3>
                <p>
                  Turn large datasets into clear, actionable insights 
                  through dynamic charts and graphs.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <img src="/path-to-your-image.png" alt="Fourth Feature" />
              <div className="feature-card-content">
                <h3>Automated Reporting</h3>
                <p>
                  Generate reports and analytics on demand with
                  authomated data processing and customizable templates.
                </p>
              </div>
            </div>
          </div>
          <Button variant='features-sec' onClick={() => handleClick('/Signup')}>
            <b>Get Started</b>
          </Button>
          
        </div>
      </section>
    </div>
  );
}

export default HomePage; 