import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../stylesheets/loginPage.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const success = () =>
    toast.success("🦄 Login Successfull", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const error = () => toast.error("Invalid details.!");

  const handelInput = (e) => {
    const { name, value } = e.target;

    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      });

      if (response.ok) {
        setLoginUser({ email: "", password: "" });
        success();
        setTimeout(() => {
          navigate("/");
          // Display toast notification on successful login
        }, 2000);
      } else {
        error();
      }

      console.log(response);
    } catch (error) {
      console.log("Error occurred in Login API fetch", error);
    }
  };

  return (
    <>
      <main>
        <div className="two-grid">
          <div className="login-image">
            <img
              src="/images/loginImg.png"
              alt="Please Login Here"
              width="600"
              height="600"
            />
          </div>
          <div className="login-form">
            <h1>Login Here !</h1>
            <form onSubmit={handelSubmit}>
              <div>
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  placeholder="abcd@gmail.com"
                  name="email"
                  value={loginUser.email}
                  id="email"
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
                  value={loginUser.password}
                  id="password"
                  required
                  autoComplete="off"
                  onChange={handelInput}
                />
              </div>
              <br />
              <button type="submit" className="btn-submit">
                Login
              </button>
              <br />
              <NavLink to="/register" className="tag">
                Create a new Account
              </NavLink>
            </form>
          </div>
        </div>

        <form onSubmit={handelSubmit}></form>

        <ToastContainer />
        
      </main>
    </>
  );
};

export default LoginPage;

// -------------------------------------------------------------------------------------------------------

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "../stylesheets/loginPage.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const LoginPage = () => {
//   const notify = () => toast("Login Successfull");

//   const [loginUser, setloginUser] = useState({
//     email: "",
//     password: "",
//   });

//   // handelAll Input Field
//   const handelInput = (e) => {
//     console.log(e);
//     let name = e.target.name;
//     let value = e.target.value;

//     setloginUser({
//       ...loginUser,
//       [name]: value,
//     });
//   };

//   // handelSubmit Button
//   const handelSubmit = async (e) => {
//     e.preventDefault();
//     console.log(loginUser);

//     try {
//       const response = await fetch(`http://localhost:8000/api/auth/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(loginUser),
//       });

//       if (response.ok) {
//         setloginUser({ email: "", password: "" });
//         {
//           notify;
//         }
//       }

//       console.log(response);
//     } catch (error) {
//       console.log("Error occur in Login API fetch", error);
//     }
//   };

//   return (
//     <>
//       <main>
//         <div className="two-grid">
//           <div className="login-image">
//             <img
//               src="/images/loginImg.png"
//               alt="Please Login Here"
//               width="600"
//               height="600"
//             />
//           </div>
//           <div className="login-form">
//             <h1>Login Here !</h1>
//             <form onSubmit={handelSubmit}>
//               <div>
//                 <label htmlFor="email">Email: </label>
//                 <input
//                   type="email"
//                   placeholder="abcd@gmail.com"
//                   name="email"
//                   value={loginUser.email}
//                   id="email"
//                   required
//                   autoComplete="off"
//                   onChange={handelInput}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password">Password: </label>
//                 <input
//                   type="password"
//                   placeholder="enter password"
//                   name="password"
//                   value={loginUser.password}
//                   id="password"
//                   required
//                   autoComplete="off"
//                   onChange={handelInput}
//                 />
//               </div>
//               <br />
//               <button type="submit" className="btn-submit">
//                 Login
//               </button>
//               <br />
//               <NavLink to="/register" className="tag">
//                 Create a new Account
//               </NavLink>
//             </form>
//           </div>
//         </div>
//         <form onSubmit={handelSubmit}></form>

//         <ToastContainer />
//       </main>
//     </>
//   );
// };

// export default LoginPage;
