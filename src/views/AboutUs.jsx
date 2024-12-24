import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="container">
      <header className="navbar">
        <h1>Purrfect Adoption</h1>
        <nav>
          <ul>
            <li><a href="#mission">About Us</a></li>
            <li><a href="#cats">Available Cats</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="mission">
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lorem vel felis aliquet tincidunt.</p>
        </section>

        <section id="history">
          <h2>Our History</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lorem vel felis aliquet tincidunt.</p>
        </section>

        <section id="team">
          <h2>Our Team</h2>
          <div className="team-cards">
            <div className="card">
              <p>Bob Doe</p>
              <p>Director</p>
            </div>
            <div className="card">
              <p>Jane Smith</p>
              <p>Coordinator</p>
            </div>
            <div className="card">
              <p>Alice Johnson</p>
              <p>Volunteer</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
