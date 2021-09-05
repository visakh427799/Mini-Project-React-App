import React from 'react';
import Intro from './login.png'
import {useState} from 'react'
import axios from 'axios'
import './Login.css'
import {Link} from 'react-router-dom'
function Login() {

const[user,setUser]=useState({
     email:"",
     password:"",
     });
const[loader,setLoader]=useState(false);
//cons

    const handleSubmit=()=>{
        if(user.email==="" || user.password===""){
          alert("Input missing")
        }
        else{
            setLoader(true)
            axios.post('http://localhost:8000/login',{user}).then((res)=>{
                console.log(res);
              if(res.data.success){
               setLoader(false)

               //redirect to home
              }

            }).catch((err)=>{

            });
            
           
        }

    }
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    return (
        <div>
          <h3>Connected <span>in</span></h3>
    <h2>Sign in</h2>
    <p>Stay updated on your professional world DevOps  </p>
    <div class="box">
    
      <input onChange={handleChange} type="text" name="email" placeholder="Enter email or phone"/>
      <input onChange={handleChange} type="text" name="password" placeholder="Enter your password"/>
     
      <button onClick={handleSubmit}>{loader?<div  className="loader" id="loginloader"></div>: "sign in"}</button>
    </div>
    <p style={{color:'black'}}>Forgot password?</p>
    <p>New to ConnectedIn? <Link to="/signup">Join now</Link></p>
    

        </div>
    )
}

export default Login
