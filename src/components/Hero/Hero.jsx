import React from "react";
import "./Hero.css";
import arrBtn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";
const Hero = ({
  heroData,
  setHeroCont,
  heroCont,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p> Explore New Features</p>
        <img src={arrBtn}></img>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCont(0)}
            className={heroCont === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCont(1)}
            className={heroCont === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCont(2)}
            className={heroCont === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="heroPlay">
          <img className="myImg"
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
          ></img>
          <p>See The Video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
