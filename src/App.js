import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.css';

import Courses from '../src/components/containers/Courses/Courses';
import Users from '../src/components/containers/Users/Users';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Fragment>
        <div className="App">
          <h1>Hello There</h1>
        </div>

        <div className="Menu">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to='/users'>Users</NavLink>
                </li>
                <li>
                  <NavLink to='/courses'>Courses</NavLink>  
                </li>               
              </ul>
            </nav>
          </header>
        </div>
        
      <Route path='/users' component={Users}/>
      <Route path='/courses' component={Courses}/>

      </Fragment>
        
      </BrowserRouter>
      
    );
  }
}

export default App;
