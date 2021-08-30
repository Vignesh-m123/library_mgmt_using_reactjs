import React,{Component} from 'react'
import { BrowserRouter as Router,Switch, Route, Link,Redirect } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import About from './About'
import Register from './Register'
import Login from '../Components/Login'
import axios from 'axios'
import Clock from 'react-live-clock';
import moment from 'moment'
// import './Header2.css'

class Header extends Component{
  constructor(props){
    super(props)
    this.state={
      login: '',
      time: moment().format('LTS'),
    }
  }
componentDidMount(){
  setInterval(this.timer, 1000);
}

timer=()=>{
  this.setState({
    time: moment().format('LTS')
  })
}

login=()=>{
  this.setState({
    login: "login"
  })
}

 render()
 { 
  if(this.state.login)
  {
    return (
      <Redirect to="/Login"/>
    )
  } 
  return(
      <Router>
        <div className="Appbody">
          <div className="divnav">
          <NavLink  className="nav-link"  to={"/"}><h1>
            Library Management System
        </h1></NavLink>
          </div>
     <nav  className="navbar  navbar-expand-sm navbar-dark sticky-top"> 
 
  <ul className="navbar-nav ml-auto">
  
   <li className="nav-item active">
       <NavLink exact  className="nav-link"  to={"/"}>About</NavLink>
    </li>
   
    
    <li className="nav-item active">
      <NavLink exact activeClassName="hactive" className="nav-link" to={"/Register"}>
      Registration
      </NavLink>
    </li>
    <li className="nav-item active">
    <Button  className="nav-link" onClick={() =>{this.login()}}>Login</Button>
    </li>
  </ul></nav>
        
        
        <Switch>
          <Route  path='/' component={About} />
          
          <Route  exact path='/Register' component={Register}/>
          </Switch>
        </div> 
    </Router>
    );
 }
}

export default Header