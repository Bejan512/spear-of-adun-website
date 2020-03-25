import React from 'react';
import "./AboutPage.css"

function AboutPage() {
  return (
    <div className="about-page">
        <div className="about-main-container">
            <h1 className="about-title">SPEAR OF ADUN</h1>
            <h2 className="about-subtitle">Artificial Intelliegence Bot</h2>
            <hr className="about-hr"></hr>
            <p className="about-content">Spear of Adun is an Artifical Intelliegence bot that I created with the purpose of playing the game StarCraft: Brood War, an intense real time strategy game, at a relatively decent level of play.</p>
            <p className="about-content">Currently the bot is capable of defeating the built in AI of the game.</p>
            <video className="about-video" poster="023.png" autoPlay="autoplay" muted controls>
                <source src="../../public/../Videos/dragoons.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
  );
}

export default AboutPage;
