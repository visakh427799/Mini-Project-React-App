
import React from 'react'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'

import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Header from './components/Home/Header/Header'
import axios from 'axios'
import getApi from './API';
const API=getApi();
function Router() {
  const [user,setUsr]=React.useState()
  React.useEffect(()=>{
    let usr=localStorage.getItem('user');
    console.log(usr);
    if(usr){
     axios.post(API+'/getUser',{usr}).then((dat)=>{
        console.log(dat.data);
        setUsr(dat.data)
        
        
         
      }).catch(()=>{

      })
       
    }
  },[])
    return (
        <div>
            <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
              <Route path="/home">
                <Header
                user="Visakh"
                />
              </Route>
              </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Router
