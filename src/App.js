import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Sub1 from './components/sub1';
import Home from './components/Home';

function App() {
  return (
    <div>
      <header>
        <h1><Link to='/'>Logo</Link></h1>
        <nav>
          <ul>
            <li><Link to='/components/sub1'>page sub1</Link></li>
            {/* <li><Link to='/components/sub1'>ahah</Link></li>
            <li><Link to='/components/sub1'>aksdf</Link></li>
            <li><Link to='/components/sub1'>asdfasdf</Link></li> */}
          </ul>
          
        </nav>
      </header>
      <div>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/components/sub1' component={Sub1}/>
        {/* <Route path='/components/sub1' component={Home}/>
        <Route path='/components/sub1' component={Home}/>
        <Route path='/components/sub1' component={Home}/> */}
      </div>
    </div>
  );
}

export default App;
