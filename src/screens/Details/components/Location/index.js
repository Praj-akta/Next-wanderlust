import React from "react";
import "./index.scss";

const Location = () => {
  return (
    <div className="location-wrapper">
      <h4 className="location-title">
        <span role="img" aria-labelledby="locationIcon">
          {" "}
          📍{" "}
        </span>
        Explore Andaman
      </h4>

      <div className="map-container">
        <iframe
          title="iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.770929324604!2d92.74562007504612!3d11.666248691713264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30889536a33dc1e9%3A0x21d4c3d8d4ec2eb1!2sPort%20Blair!5e0!3m2!1sen!2sin!4v1619021471566!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="location-grid">
        <div className="location-column">
          <h3> <span role="img" aria-labelledby="Plane"> ✈️ </span> How to Reach</h3>
          <p className="mb-2">
            <strong>By Air:</strong> <span className="text-secondary"> Fly into Veer Savarkar International
            Airport (Port Blair) from cities like Delhi, Chennai, Kolkata &
            Bangalore.</span>
          </p>
          <p>
            <strong>By Sea:</strong> <span className="text-secondary"> Passenger ships operate from Chennai,
            Kolkata, and Visakhapatnam. Ideal for a scenic sea journey! </span>
          </p>
        </div>

        <div className="location-column">
          <h3> <span role="img" aria-labelledby="travel"> 🗺️  </span> Travel Tips</h3>
          <ul className="text-secondary">
            <li>Carry sunscreen and insect repellent</li>
            <li>Foreign nationals require special permits</li>
            <li>Inter-island transport includes ferries and seaplanes</li>
            <li>Cash is preferred in remote areas</li>
          </ul>
        </div>
      </div>

      <div className="featured-locations">
        {/* Featured Locations */}
        <h3>
          <span role="img" aria-labelledby="Beach">
            🏝️
          </span>
          Must-Visit Spots
        </h3>
        <div className="featured-list">
          {[
            {
              title: "Radhanagar Beach",
              desc: "Voted one of Asia’s best beaches. Ideal for sunset views and relaxation.",
            },
            {
              title: "Havelock Island",
              desc: "Perfect for scuba diving and snorkeling among coral reefs.",
            },
            {
              title: "Neil Island",
              desc: "Tranquil and scenic, perfect for a peaceful escape.",
            },
            {
              title: "Cellular Jail",
              desc: "Historical site from colonial India, now a national memorial.",
            },
            {
              title: "Ross Island",
              desc: "Old British administrative HQ with ruins and peacocks.",
            },
          ].map((loc, idx) => (
            <div key={idx} className="feature-card">
              <h4 className="font-weight-semibold text-lg mb-2">{loc.title}</h4>
              <p className="text-secondary">{loc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
