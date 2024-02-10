import React, { useState } from "react";
import "../stylesheets/contactPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const [contact, setcontact] = useState({
    username: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

  const sent = () =>
    toast.success("Message Sent Successfully..", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setcontact({
      ...contact,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch(`http://localhost:8000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setcontact({ username: "", email: "", message: "" });
        sent();
        setTimeout(() => {
          navigate("/success");
          // Display toast notification on successful login
        }, 4000);
      } else {
        setTimeout(() => {
          navigate("*");
        }, 2000);
      }
      console.log(response);
    } catch (error) {
      console.log("Error occur in Contact Page", error);
    }
  };

  return (
    <>
      <main>
        <div className="contact-container">
          <div className="contact-style">
            <div className="left-contact">
              <img src="/images/contact.png" alt="contact image" />
            </div>
            <div className="right-contact">
              <h1>Contact Form</h1>
              <form onSubmit={handelSubmit}>
                <div>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={contact.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    placeholder="abcd@gmail.com"
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                    value={contact.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="message">Message: </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="70"
                    rows="8"
                    placeholder="Write your feedback"
                    required
                    value={contact.message}
                    onChange={handleInput}
                  ></textarea>
                </div>
                <button type="submit" className="btn-submit">
                  Send
                </button>
              </form>
            </div>
          </div>
          <form onSubmit={handelSubmit}></form>

          <ToastContainer />
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.114066425391!2d88.7557195754786!3d25.233082777687965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb61224a5cce13%3A0x9d09cb6ecbe5e248!2sBalurghat%20Railway%20Station%2C%20Dakshin%20Dinajpur.!5e0!3m2!1sen!2sin!4v1701617679951!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
