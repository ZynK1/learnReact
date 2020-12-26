import React, { useState } from 'react'
import HMenu from './components/HMenu'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Pages'
import About from './components/Pages/about'
import Discover from './components/Pages/discover'
import Services from './components/Pages/services'
import SignUp from './components/Pages/sign-up'

function App() {

  return (
    <>
    <Router>
      <HMenu />
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/about" exact component={About}/>
         <Route path="/services" exact component={Services}/>
         <Route path="/discover" exact component={Discover}/>
         <Route path="/sign-up" exact component={SignUp}/>
       </Switch>
    </Router>
    
    </>
  );
}

export default App;
