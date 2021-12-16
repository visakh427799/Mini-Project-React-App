import React from "react";
import Intro from "./login.png";
import { useState } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import getApi from '../../API';
const API=getApi();
function Login() {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  //cons
  
  const handleSubmit = () => {
    console.log(process.env.REACT_APP_BASE_URL_HEROKU);
    if (user.email === "" && user.password === "") {
      alert("Input missing");
    } else {
      setLoader(true);
     
      axios.post(API+`/login`,{user}).then((res)=>{
          console.log(res);
        if(res.data.success){
         setLoader(false)
         console.log(res.data.user_id)
         localStorage.setItem('user',res.data.user_id)
         history.push("/signup");
        //  //redirect to home
        }
        else{
        
          Swal.fire({
            icon: 'error',
           
            text: 'Invalid credentials..!',
           
          })
         setLoader(false)

        }

      }).catch((err)=>{

      });
    }
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3>
        Connected <span className="in">in</span>
      </h3>
      <h2>Sign in</h2>
      <p>Stay updated on your professional world </p>
      <div class="box">
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Enter email or phone"
        />
        <input
          onChange={handleChange}
          type="text"
          name="password"
          placeholder="Enter your password"
        />

        <button onClick={handleSubmit}>
          {loader ? <div className="loader" id="loginloader"></div> : "sign in"}
        </button>
      </div>
      <p style={{ color: "black" }}>Forgot password?</p>
      <p>
        New to ConnectedIn? <Link to="/signup">Join now</Link>
      </p>
    </div>
  );
}

export default Login;
