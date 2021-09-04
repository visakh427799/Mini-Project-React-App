
import React from 'react'
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'

import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
function Router() {
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
              </Switch> 
            </BrowserRouter>
        </div>
    )
}

export default Router
