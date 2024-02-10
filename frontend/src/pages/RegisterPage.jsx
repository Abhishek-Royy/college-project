import React, { useState } from "react";
import "../stylesheets/registerPage.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [registerUser, setregisterUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  // handelAll Input Field
  const handelInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setregisterUser({
      ...registerUser,
      [name]: value,
    });
  };

  // handelSubmit Button
  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(registerUser);
    try {
      const response = await fetch(`http://localhost:8000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerUser),
      });

      if (response.ok) {
        // const res_Data=await response.json();
        // console.log("Response Data is ",res_Data);
        setregisterUser: ({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log("Error occar in Registration api fetch", error);
    }
  };

  return (
    <>
      <main>
        <div className="two-grid">
          <div className="grid">
            <div className="registration-image">
              <img
                src="/images/registration.png"
                alt="Please Register Here"
                width="500"
                height="650"
              />
            </div>
            {/* Form */}
            <div className="registration-form">
              <h1>Registration Form</h1>

              <form onSubmit={handelSubmit}>
                <div>
                  <label htmlFor="username">Username: </label>
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    id="username"
                    value={registerUser.username}
                    onChange={handelInput}
                    required
                    autoComplete="off"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    placeholder="abcd@gmail.com"
                    name="email"
                    value={registerUser.email}
                    id="email"
                    required
                    autoComplete="off"
                    onChange={handelInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone: </label>
                  <input
                    type="number"
                    placeholder="0000000000"
                    name="phone"
                    value={registerUser.phone}
                    id="phone"
                    required
                    autoComplete="off"
                    onChange={handelInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password: </label>
                  <input
                    type="password"
                    placeholder="enter password"
                    name="password"
                    value={registerUser.password}
                    id="password"
                    required
                    autoComplete="off"
                    onChange={handelInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn-submit">
                  Register
                </button>
                <br />
                <NavLink style={{ color: "black" }} to="/login" className="tag">
                  Allready have an Account ? Click here to login
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
