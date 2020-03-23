import React from 'react';
import {ReactTitle} from 'react-meta-tags';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import CreatorPage from './components/CreatorPage';




function App() {
  return (
    <Router>
      <div className="App">
        <ReactTitle title="StarCraft Artificial Intelligence" />
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/creator" component={CreatorPage} />
      </div>
    </Router>
  );
}

export default App;
