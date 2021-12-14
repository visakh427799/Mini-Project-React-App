import React from 'react'
import { useState } from 'react'
import './Signup.css'
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'
import getApi from '../../API';
const API=getApi();
function Signup() {

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



    let history=useHistory()
    const[loader,setLoader]=useState(false)
    const[otpsend,setOtpsend]=useState(false)
    const[disabled,setDisabled]=useState(false)
    const[email,setEmail]=useState("");
    const[otp,setOtp]=useState("")
    const[count,setCount]=useState(1)

    const [pass,setPass]=useState({

      pass1:"",
      pass2:""
    })
    const [names,setNames]=useState({

      fname:"",
      lname:""
    })
    
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
       
        axios.post(API+'/email-verify',{email})
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
                // .then(()=>{
                //   setOtpsend(true);
                // })
                  setDisabled(true)
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
      setLoader(true)
      
      axios.post(API+'/otp-verify',{email,otp}).then((res)=>{
        if(res.data.success){

          Toast.fire({
            icon: 'success',
            title: 'OTP verified successfully'
          })
         setLoader(false)

          localStorage.setItem('user',res.data.user_id)
          let uid=localStorage.getItem('user');
          axios.post(API+'/progress',{uid}).then((res)=>{

           if(res.data.success){
            console.log(res.data.steps);


                 
           }
           else{
            console.log("err");

           }


          }).catch(()=>{
            console.log("err");

          })
          setCount(2)

        }
        else{
         if(res.data.val===1){
          Toast.fire({
            icon: 'error',
            title: 'OTP is wrong...!!'
          })
           setLoader(false)
         }
         else{
          Toast.fire({
            icon: 'error',
            title: 'OTP is wrong...!!'
          })
          setLoader(false)

         }
        }
       
      }).catch(()=>{
        Toast.fire({
          icon: 'error',
          title: 'OTP is wrong...!!'
        })
         setLoader(false)

      })
    }
   

    const setPassword=()=>{
      setLoader(true)

      let u_id=localStorage.getItem('user');
      console.log(u_id);
    
      axios.post(API+'/add-password',{pass,u_id}).then((resp)=>{

        console.log(resp)
         if(resp.data.success){
            //  history.push("/home");
            Toast.fire({
              icon: 'success',
              title: 'Password set successfully'

            })
            setLoader(false)
            setCount(3)
    
      
         }
         else{
          Toast.fire({
            icon: 'error',
            title: 'something went wrong...!!'
          })
           setLoader(false)
         }
           
      }).catch((err)=>{
        Toast.fire({
          icon: 'error',
          title: 'something went wrong...!!'
        })
         setLoader(false)
          console.log(err)

      })

    }

     const setName=()=>{
       setLoader(true)
      let u_id=localStorage.getItem('user');
     if(u_id){
      axios.post(API+'/add-names',{names,u_id})
      .then((resp)=>{

        if(resp.data.success){
          //  history.push("/home");
          Toast.fire({
            icon: 'success',
            title: 'username set successfully'

          })
          setLoader(false)
          history.push('/onboarding')
          //setCount(4)
       }
       else{
        Toast.fire({
          icon: 'error',
          title: 'something went wrong...!!'
        })
         setLoader(false)
       }
          
      }).catch(()=>{
        Toast.fire({
          icon: 'error',
          title: 'something went wrong...!!'
        })
         setLoader(false)
      })
     }
    }

  const handleChangepass=(e)=>{

      setPass({...pass,[e.target.name]:e.target.value});
 
    }
    const handleChangefname=(e)=>{

      setNames({...names,[e.target.name]:e.target.value});
 
    }
    
  switch(count){
    case 1:
      return (
        <div className="bd">
    <h3>Connected <span className="in">in</span></h3>
    
    <h2>Sign up</h2>

    <p>{otpsend?"An otp has been send to "+email:"Stay updated on your professional world"}</p>
    <div class="box">
    
     <input onChange={handleChange} disabled={disabled} type="text" name="email" placeholder="Enter email or phone"/>
     {otpsend?<input onChange={changeOtp} type="text" name="otp" placeholder="Enter the otp"/> :""}
     {/* {otpsend?<div className="timer"></div>:<></>} */}
     
      <button onClick={otpsend?otpSubmit:handleSubmit}>{loader?<div  className="loader" id="loginloader"></div>: "Next"}</button>
    </div>
    
    <p>Already have an account? <Link to="/">Login</Link></p>
        
        </div>
    )
  
    break;
    case 2:
      return (
        <div>
             <h3>Connected <span className="in">in</span></h3>
    {/* <h2>Sign up</h2> */}
    <h4>Set up a password for your account</h4>
    <div class="box">
    
      <input onChange={handleChangepass}  type="text" name="pass1" placeholder="Enter a password"/>
     <input onChange={handleChangepass} type="text" name="pass2" placeholder="Confirm password"/> 
    
     
      <button  onClick={setPassword}>{loader?<div  className="loader" id="loginloader"></div>: "Let's go"}</button>
    </div>
    
    
        </div>
    )

    
  
    break;  

    case 3:
      return (
        <div>
             <h3>Connected <span className="in">in</span></h3>

    <h4>Make the most of your professional life</h4>
    <div class="box">
    
      <input onChange={handleChangefname}  type="text" value={names.fname} name="fname" placeholder="Enter first name"/>
     <input onChange={handleChangefname} type="text" value={names.lname} name="lname" placeholder="Enter last name"/> 
     {/* onClick={setUsername} */}
     
      <button onClick={setName}>{loader?<div  className="loader" id="loginloader"></div>: "Continue"}</button>
    </div>
    
    
        </div>
    )





default:
break;
  }


          
}

export default Signup
