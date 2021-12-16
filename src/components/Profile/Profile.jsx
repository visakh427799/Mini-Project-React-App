import React from "react";
import { useState } from "react";
import "./Profile.css";
import Countries from "../utils/cArray";
import Jobs from "../utils/jobArray";
import getApi from "../../API";
import axios from "axios";
import {useHistory} from "react-router-dom"
const API = getApi();
let cArr = Countries();
let jobArr = Jobs();

function Profile(props) {
  let history=useHistory();
  console.log(props.user);
  const [loader, setLoader] = useState(false);
  const [states, setStates] = useState([]);
  const [districts, setdistricts] = useState([]);
  const [count, setCount] = useState(4);
  const [job, setJob] = useState();
  // const [student,setStudent]=useState(
  //   {text:"I am a student",
  // val:true});
  const [country, setCountry] = useState();
  const [st, setSt] = useState();
  const [edu,setEducation]=useState({
    school:"",
    degree:"",
    specialization:"",
    from:"",
    to:"",
  
  })
  const[photo,setPhoto]=useState({
    img:null,
  })
  

  const saveLocation = () => {
    setLoader(true);
    let u_id=localStorage.getItem('user');
    if(u_id){

      axios
      .post(API + "/add-location", { country,st,u_id})
      .then((resp) => { 
        setLoader(false)
        setCount(5);

      })
      .catch((err) => {});
    }
   
    
  };
  const handleCountries = (e) => {
    //console.log(e.target.value);
    let sts = cArr.filter((dat) => dat.name === e.target.value);
    setStates(sts[0].states);
    setCountry(e.target.value)

  };
  const handleStates =(e)=>{
    setSt(e.target.value)

  }
  const handleJob = () => {
    //setLoader(true);
    //setCount(3);
    let u_id=localStorage.getItem('user');
  if(u_id){
    setLoader(true)
    axios
    .post(API + "/add-job", { job,u_id})
    .then((resp) => {
      console.log(resp)
      if(resp.data.success){
        setLoader(false)
        setCount(6)
      }


    })
    .catch((err) => {});

  }
 
  };
  const handleJobs = (e) => {
    setJob(e.target.value);
  }; const handleEdu = (e) => {
    console.log(e.target.value);
    setEducation({...edu,[e.target.name]:e.target.value})

  };

  const addEducation=()=>{
    setLoader(true)
    let u_id=localStorage.getItem('user');
if(u_id){
  axios
  .post(API+"/add-education", {edu,u_id})
  .then((resp) => {
    console.log(resp)
    if(resp.data.success){

      setLoader(false)
      setCount(7)
    }
  })
  .catch((err) => {});
}
}

const handleFile=(e)=>{
  // console.log( e.target.files[0]);
  setPhoto( e.target.files[0])
}

const onFileUpload=()=>{
  setLoader(true)
  console.log(photo);
  const formData = new FormData();
  let u_id=localStorage.getItem('user');
      // Update the formData object
      formData.append(
        "myFile",
        photo,
        u_id,
      
      );
    

  if(u_id){
    axios.post(API+'/photo-upload',formData)
    .then((resp)=>{
       if(resp.data.success){
        alert("image uploaded")
         history.push('/home')
       }
       else{
         console.log(resp.data.err)
       }
      
  
       setLoader(false)
    })
    .catch((err)=>{

      console.log(err)

    })

  }
     
}

  switch (count) {
    case 4:
      return (
        <div className="bd">
          <h3>
            Connected <span className="in">in</span>
          </h3>

          <h3>Welcome back, {props.user}</h3>

          <p className="p_profile">
            Let's start your profile, connect to people you know..
          </p>
          <div class="box_profile">
            <div>
              <p></p>
              <select onChange={handleCountries} class="sel">
                <option>Select Country/Region </option>

                {cArr.map((dat) => {
                  return <option name="country">{dat.name}</option>;
                })}
              </select>
            </div>

            <div>
              <p></p>

              <select  onChange={handleStates} class="sel">
                <option>Select State </option>
                {states.map((dat) => {
                  return <option name="state">{dat.name}</option>;
                })}
              </select>
            </div>
            <div>
              <p></p>

              {/* <select class="sel">
              <option>Enter District </option>
              {cArr.map((dat) => {
                return <option>{dat.name}</option>;
              })}
            </select> */}
            </div>

            <button onClick={saveLocation}>
              {loader ? (
                <div className="loader" id="loginloader"></div>
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      );

      break;
    case 5:
      return (
        <div className="bd">
          <h3>
            Connected <span className="in">in</span>
          </h3>

          {/* <h3>Welcome back, Jissin</h3> */}

          <p className="p_profile">
            Your profile helps you discover new people and opportunities
          </p>
          <div class="box_profile">
            <div>
              {/* <input  onChange={handleJobChange} className="profile_inp" placeholder="*Most recent job title" type="text" name="job" />
               */}
              <select class="sel"  onChange={handleJobs}>
                <option>Most recent job title </option>
                {jobArr.map((dat) => {
                  return <option>{dat}</option>;
                })}
              </select>
              {/* <p onClick={handleJob}>{student}</p> */}
            </div>
            <button onClick={handleJob}>
              {loader ? (
                <div className="loader" id="loginloader"></div>
              ) : (
                "Continue"
              )}
            </button>
          </div>
        </div>
      );
      break;
     
      

    case 6:
      return (
        <div>
          <h3>
            Connected <span className="in">in</span>
          </h3>

          {/* <h3>Welcome back, Jissin</h3> */}

          <p className="p_profile">
            Your profile helps you discover new people and opportunities
          </p>
          <div class="box">
            <div className="box_small">
              <input
                onChange={handleEdu}
                type="text"
                name="school"
                placeholder="*School/college or university"
              />
              <input  onChange={handleEdu} type="text" name="degree" placeholder="*Degree" />
              <input  onChange={handleEdu}  type="text" name="specialization" placeholder="*Specialization" />
              <div className="row">
                <div className="row_2">
                  <label>Start Date</label>
                  <input onChange={handleEdu}  type="date" name="from" placeholder="Start year" />
                </div>
                <div className="row_2">
                  <label>End Date</label>
                  <input  onChange={handleEdu}  type="date" name="to" placeholder="Start year" />
                </div>
              </div>
              {/* <label>I am over 16</label>{" "}
              <input
                onChange={handleEdu}
                className="chk_box"
                type="checkbox"
                name="over_16"
                
              /> */}
              <button onClick={addEducation}>
                {loader ? (
                  <div className="loader" id="loginloader"></div>
                ) : (
                  "Let's go"
                )}
              </button>
            </div>
          </div>
        </div>
      );
      break;

          case 7:
      return (
        <div>
          <h3>
            Connected <span className="in">in</span>
          </h3>

          {/* <h3>Welcome back, Jissin</h3> */}

          <p className="p_profile">
            Adding a photo helps people recognize you
          </p>

          <input onChange={handleFile}  className="profile_pic" type="file" name="profile_pic"/>

          <div className="box">
           
              
          
             <button className="pro_btn" onClick={onFileUpload}>
                {loader ? (
                  <div className="loader" id="loginloader"></div>
                ) : (
                  "upload"
                )}
              </button>
          </div>
        </div>
      );
    default:
      break;
  }
}

export default Profile;
