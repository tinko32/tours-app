import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './NavBar.css';
import Home from './Home';
import About from './About';
import Form from './Form';

export default function App() {
  return (
    <Router>
      <div>
      <nav class="navBar navbar-expand-lg navbar-light  center">
  <a class="navbar-brand">
    
    <img id="img33" alt="Tours-img" src={"https://freepikpsd.com/media/2020/04/travel-and-tours-logo-png-2-beach.png"}></img>
    
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"><Link to="/Home">Home</Link></a>
      </li>
    
      <li class="nav-item dropdown">
        <div>
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Link to="/tours-app/src/components/Form.js">
          Sign Up
          </Link>
        </a>
        </div>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item">Action</a>
          <a class="dropdown-item" >Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" >Something else here</a>
        </div>
      </li>
      <div>
      <li class="nav-item">
        <a class="nav-link"><Link to="/About us">About Us</Link></a>
      </li>
      </div>
    </ul>
  </div>
</nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About us">
            <About />
            <break />
          </Route>
          <Route path="/src/components/Form.js">
            <Form />
            <break />
          </Route>
          <Route path="/Home">
            <Home />
            <break />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




