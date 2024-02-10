import React, { useEffect } from "react";
import Typed from "typed.js";
import "../stylesheets/footer.css";
import { NavLink } from "react-router-dom";

function Footer() {
  useEffect(() => {
    const typed = new Typed(".input", {
      strings: ["Instagram", "Linkedin", "Facebook", "Telegram"],
      typeSpeed: 90,
      backSpeed: 85,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <div className="footer-container">
        <div className="text">
          <h1>
            #Join us on <span className="input"></span>
          </h1>
        </div>

        <div className="footer-lists">
          <div className="left-footer">
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/abhishek-roy-4a5244239/"
                target="_blank"
              >
                <i class="ri-linkedin-fill"></i>
              </a>
              <a href="/telegram">
                <i class="ri-telegram-line"></i>
              </a>
              <a
                href="https://www.instagram.com/itz.abhishek2.o/"
                target="_blank"
              >
                <i class="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100033861155295"
                target="_blank"
              >
                <i class="ri-facebook-fill"></i>
              </a>
              <a href="https://github.com/Abhishek-Royy" target="_blank">
                <i class="ri-github-fill"></i>
              </a>
            </div>
          </div>
          <div className="right-footer">
            <div className="about">
              <ul>
                <NavLink to="/courses" className="a-link"><li>Courses</li></NavLink>
                <NavLink to="/privacy" className="a-link"><li>Privacy</li></NavLink>
                <NavLink to="/policy" className="a-link"><li>Policy</li></NavLink>
                <NavLink to="/codition" className="a-link"><li>Condition</li></NavLink>
                <NavLink to="/refund" className="a-link"><li>Refund</li></NavLink>
                <NavLink to="/community" className="a-link"><li>Community</li></NavLink>
              </ul>
            </div>
          </div>
        </div>
        <p>Copyright © 2023 happycoding Technology. All Rights Reserved</p>
      </div>
    </main>
  );
}

export default Footer;
