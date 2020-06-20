import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import "./HomePage.css"


function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default HomePage;
