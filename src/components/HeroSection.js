import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


import { FcAssistant } from "react-icons/fc";
import { FcPositiveDynamic } from "react-icons/fc";
import { FaStar } from "react-icons/fa";

import a from '../images/a.png';
import b from '../images/b.png';
import c from '../images/c.png';


function HeroSection() {
    console.log('herosection');
    return (
        <section className="hero-section">
           <p className="fo">
           CONTENT <FcAssistant className="icon" /> <br/>
        ON<span className="demand-text"><FcPositiveDynamic className="icon" />DEMAND</span>
      </p>
            <h1>
                We take your content stress away, so
                you can focus on the bigger picture
            {/*    <Link to="/how-it-works" className="highlight">this</Link>. Or even
                <Link to="/pricing" className="highlight">this</Link>. */}
            </h1>

            <button className="btn btn-dark show-me-btn">SHOW ME HOW</button>

            <div className="hero-images">
                <div className="image-box"> <img alt="one" src={a}></img></div>
                <div className="image-box"> <img alt="one" src={b}></img></div>
                <div className="image-box"> <img alt="one" src={c}></img></div>
                <div className="image-box"> <img alt="one" src={a}></img></div>
                <div className="image-box"> <img alt="one" src={b}></img></div>
                <div className="image-box"> <img alt="one" src={c}></img></div>
                <div className="image-box"> <img alt="one" src={a}></img></div>
                <div className="image-box"> <img alt="one" src={b}></img></div>
            </div>
            <p className="hero-subtext">
        <FaStar className="star-icon" /> High Quality <FaStar className="star-icon" /> Seamless Experience <FaStar className="star-icon" /> Effortless Process <FaStar className="star-icon" /> High Quality <FaStar className="star-icon" /> Seamless Experience <FaStar className="star-icon" /> Effortless Process
      </p>
           
        </section>
    );
}

export default HeroSection;
