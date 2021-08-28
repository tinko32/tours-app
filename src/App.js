import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';



class App extends Component {
  state = {  }
  render() { 
    return (
      <Router>
    <div ClassName="App">

      <NavBar path="../src/components/NavBar.js" href="./components/NavBar.js" exact Component={NavBar} />
     

      
     </div>
     </Router>
     );
  }
}


 
export default App;


