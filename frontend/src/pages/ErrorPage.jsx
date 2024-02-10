import React from "react";
import "../stylesheets/errorPage.css";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div id="oopss">
        <div id="error-text">
          <img src="/images/error.png" alt="Error Occured" />
          <span>404 PAGE</span>
          <p class="p-a">. The page you were looking for could not be found</p>
          <p class="p-b">... Back to previous page</p>
          <NavLink className="back" to="/">
            Back to Home Page
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
