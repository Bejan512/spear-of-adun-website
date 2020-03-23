import React from 'react';
import {ReactTitle} from 'react-meta-tags';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <ReactTitle title="StarCraft Artificial Intelligence" />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
