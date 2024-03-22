import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailerror, setEmailError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [error, setError] = useState("");


    // const HandleLogin = (e) => {
    //     e.preventDefault();
    //     setEmailError("");
    //     setPasswordError("");

    //     if (!email) {
    //         setEmailError("Email is Required")
    //         return;
    //     }
    //     else if (email && !new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(email)) {
    //         setEmailError("Email  Must match the format")
    //         return;
    //     }
    //     if (!password) {
    //         setPasswordError("password is Required");
    //         return;
    //     }

    //     let request = {

    //         email: email,
    //         password: password

    //     }
    //     API.post("http://localhost:4000/abibooks_service/v1/login1/login", request).then(response => {
    //         if (response.data.success) {
    //             navigate("/dashBoard");
    //         }
    //         else {
    //             setError("email or password wrong ")

    //         }
    //     });


    // }





//   const loginhandleSubmit = (e) => {
//     e.preventDefault();
//     setEmailError("");
//     setPasswordError("");

//     if (!Email) {
//       setEmailError("Email is required");
//       return;
//     }
//     else if (Email && !new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(Email)) {
//       setEmailError("Email is not in the format")
//       return;
//     }
//     if (!Password) {
//       setPasswordError("Password is required")
//       return;
//     }
//     else if (Password.length > 10) {
//       setPasswordError("")
//       return;
//     }

//     let request = {

//       email: Email,
//       password: Password,

//     }
//     API.post("http://localhost:4000/services/v1/login/login", request).then(response => {
//       if (response.data.success) {
//         navigate("/dashboard");
//       }
//       else {
//         setErrorMessage("email or password wrong ")
//       }
//     });

//   }
  return (
    <div>
    <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2 class="text-center text-dark mt-5">Login Form</h2>
        <div class="text-center mb-5 text-dark">Made with bootstrap</div>
        <div class="card my-5 login-form">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
                <h1 class="text-class">Login Form</h1>
              {/* <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/> */}
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name"/>
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password"/>
            </div>
            <div class="text-center"><button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button></div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
    </div>
  );
  
};

export default Login;



         




  
