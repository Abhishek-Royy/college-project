import React from "react";
import Footer from "./Footer";
import "../stylesheets/homePage.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="grid">
          <div className="left">
            <div className="text">
              <h1>
                Most Easiest and Populer <span>Coding Platform</span> for
                Students & Developers
              </h1>
              <div className="tag-icon">
                <h2>#happyCoding</h2>
                <i class="ri-terminal-box-line"></i>
              </div>
            </div>

            <div className="view-btn">
              <NavLink to="/explore" className="v-btn"><button>Explore</button></NavLink>
              <NavLink to="/dashbord" className="v-btn"><button>Dashboard</button></NavLink>
            
            </div>
          </div>
          <div className="right">
            <img src="/images/kid.png" alt="homepage img" />
          </div>
        </div>

        {/* ---------------------- */}

        <div className="video-grid">
          <div className="left-video">
            <video loop autoPlay width="750" height="500" controls>
              <source src="/videos/webVideo.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="right-video-text">
            <h1>
              Everyone Should Know how to program a Computer, because it teaches
              you how to thinks..
            </h1>
          </div>
        </div>

        {/* ------------------------------------ */}

        <div className="video-grid2">
          <div className="left-video-text2">
            <h1>
              Programming today is a race between software engineers striving to
              build bigger and better idiot-proof programs and the Universe
              trying to produce bigger and better idiots. So far, the Universe
              is winning
            </h1>
          </div>
          <div className="right-video2">
            <img
              src="/images/webPhoto.jpg"
              alt="coding Photo"
              width="650"
              height="450"
            />
          </div>
        </div>

        {/* ------------------------------------------------- */}

        <div className="placement">
          <div className="placement-text">
            <h1>
              Top <span>Dream</span> Company
            </h1>
          </div>
          <div className="placement-img">
            <img src="/company/accenture.png" alt="accenture" width="150" />
            <img src="/company/airtel.png" alt="airtel" width="150" />
            <img src="/company/amazon.png" alt="amazon" width="150" />
            <img src="/company/cognijent.png" alt="cognijent" width="150" />
            <br />
            <img src="/company/delloite.png" alt="delloite" width="150" />
            <img src="/company/google.png" alt="accenture" width="150" />
            <img src="/company/isro.png" alt="accenture" width="150" />
            <img src="/company/jp.png" alt="accenture" width="150" />
            <br />
            <img src="/company/microsoft.png" alt="accenture" width="150" />
            <img src="/company/paypal.png" alt="accenture" width="150" />
            <img src="/company/salseforce.png" alt="accenture" width="150" />
            <img src="/company/samsung.png" alt="accenture" width="150" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
