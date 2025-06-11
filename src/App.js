import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Logoimg from './images/Logo2.png';
import { GiHamburgerMenu } from "react-icons/gi";
import About from './components/About';
import Products from './components/Products';
import Clients from './components/Clients';

function App() {
  return (
    <div>
      <div className="head_area">
        <div className="h_main">
          <h1><Link to='/'><img className="logo" src={Logoimg} alt=""/></Link></h1>
          <div className="h_nav">
            <div className="h_nav_top">
              <ul className="h_nav_top_in">
                <li><Link to='/signIn'>Sign In</Link></li>
                <li><Link to='/signUp'>Sign Up</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/order'>Order</Link></li>
              </ul>
            </div>
            <ul className="h_nav_bot">
              <li><Link to='/Products'>Products</Link></li>
              <li><Link to='/AboutUs'>About Us</Link></li>
              <li><Link to='/Clients'>Clients</Link></li>
              <li><Link to='/Comments'>Comments</Link></li>
              <li><GiHamburgerMenu /></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{width:'100%'}}>
        <Route path='/' exact={true} component={Home} />
        <Route path='/Products' component={Products} />
        <Route path='/Products' component={About} />
        <Route path='/AboutUs' component={Clients} />
      </div>
    </div>
  );
}

export default App;
