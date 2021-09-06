import React from 'react'
import { useState } from 'react'
import './Signup.css'
import {Link} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
function Signup() {

    const[loader,setLoader]=useState(false)
    const[otpsend,setOtpsend]=useState(false)
    const[disabled,setDisabled]=useState(false)
    const[email,setEmail]=useState("");
    const[otp,setOtp]=useState("")
    
    const changeOtp=(e)=>{
       setOtp(e.target.value)
    }

    const handleChange=(e)=>{
       setEmail(e.target.value)
    }
    const handleSubmit=()=>{

    if(email===""){
        Swal.fire({
            icon: 'error',
           
            text: 'Enter a valid email!',
           
          })
    }
    else{
        setLoader(true)
        setDisabled(true)
        axios.post('https://cicdnode.herokuapp.com/email-verify',{email})
        .then((res)=>{
            if(res.data.success){
          
              setLoader(false)
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: 'OTP sent successfully'
                })
                setOtpsend(true);
                // var seconds = 180;
                // var el = document.getElementsByClassName('timer');
                
                // function incrementSeconds() {
                //     seconds -= 1;
                //     el.innerHTML = "You have been here for " + seconds + " seconds.";
                // }
                
                // setInterval(incrementSeconds, 1000);
            }
            else{
                setLoader(false)
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: 'Something went wrong...!!'
                })
            }

        }).catch(()=>{

        })
    }
         
    }
    const otpSubmit=()=>{
      
      axios.post('https://cicdnode.herokuapp.com/otp-verify',{email,otp}).then((res)=>{
        if(res.data.success){
          alert("otp verified")


        }
        else{
         if(res.data.val===1){
           alert("Otp is incorrect")
         }
         else{
          alert("something went wrong try again")
         }
        }

      }).catch(()=>{
         alert("something went wrong")
      })
    }
   
    return (
        <div>
             <h3>Connected <span className="in">in</span></h3>
    <h2>Sign up</h2>
    <p>{otpsend?"An otp has been send to "+email:"Stay updated on your professional world"}</p>
    <div class="box">
    
      <input onChange={handleChange} disabled={disabled} type="text" name="email" placeholder="Enter email or phone"/>
     {otpsend?<input onChange={changeOtp} type="text" name="otp" placeholder="Enter the otp"/> :""}
     {/* {otpsend?<div className="timer"></div>:<></>} */}
     
      <button onClick={otpsend?otpSubmit:handleSubmit}>{loader?<div  className="loader" id="loginloader"></div>: "Next"}</button>
    </div>
    
    <p>Already have an account? <Link to="/">Next</Link></p>
        </div>
    )
}

export default Signup
