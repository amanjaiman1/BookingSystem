import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  duration: 2000,
});

function LandingScreen() {
  return (
    <div className="row landing">
      <div className="col-md-12 text-center">
        <h2 data-aos="zoom-in" style={{ color: "skyblue", fontSize: "100px" }}>
          Eventure To Book Best Venue
        </h2>
        <h1 data-aos="zoom-out" style={{ color: "orange" }}>
        "Events are the catalyst for connection, and the right space makes all the difference."
        </h1>
        <Link to="/home">
          <button className="btn btn-primary landingBtn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingScreen;
