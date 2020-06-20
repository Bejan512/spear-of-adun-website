import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-main-container">
        <h1 className="about-title">SPEAR OF ADUN</h1>
        <h2 className="about-subtitle">Artificial Intelligence Bot</h2>
        <hr className="about-hr"></hr>
        <p className="about-content">
          Spear of Adun is an Artifical Intelligence bot that was created with
          the purpose of playing StarCraft: Brood War, an intense real time
          strategy game, at a relatively decent skill level.
        </p>
        <p className="about-content">
          Currently the bot knows how to play the Protoss race, and is capable
          of defeating the built in AI of the game.
        </p>
        <a
          href="https://sscaitournament.com/"
          className="about-content about-links"
        >
          Student Starcraft AI Tournament (SSCAIT)
          <FaExternalLinkAlt className="about-link-icon" />
        </a>
        <list>
          <li className="about-content">
            SSCAIT is a non-profit organization that runs an annual Artificial
            Intelliegence tournament where bots created by computer science
            students as well as any others with an interest in AI can compete
            against eachother.
          </li>
          <li className="about-content">
            There is also a ladder that runs 24/7 where bots compete against
            eachother.
          </li>
        </list>
        <a
          href="https://github.com/JavaBWAPI/JBWAPI"
          className="about-content about-links"
        >
          Java Brood War API (JBWAPI)
          <FaExternalLinkAlt className="about-link-icon" />
        </a>
        <list>
          <li className="about-content">
            Spear of Adun was created using JBWAPI, a pure java implementation
            of BWAPI (Brood War API).
          </li>
        </list>
        <p className="about-content">
          You can take a look at some of the videos below for examples of Spear
          of Adun going up against the built in bot.
        </p>
        <video
          className="about-video"
          playsinline="true"
          disablePictureInPicture="true"
          autoplay="autoplay"
          muted
          controls
        >
          <source src="../../public/../Videos/dragoons.mp4" type="video/mp4" />
        </video>
        <p className="video-caption">Spear of Adun vs. Standard Zerg AI</p>
        <div className="about-github-icon">
          <a
            href="https://github.com/Bejan512/spear-of-adun"
            className="about-github-button"
          >
            <FaGithub className="about-github-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
