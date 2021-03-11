import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";


export default function Landing() {
    return (
      <section id="landing" className="landing__section">
        <div className="landing__content">
          <div className="landing__header">
            <h3 className="landing__title">Front End Developer</h3>
          </div>
          <div className="landing__subtitle">
            <p>
              Specialized in React. I build web applications, that solve
              problems and help people get things done. Always eager to help
              others, learn from fellow developers.
            </p>
          </div>
          <div className="landing__Intro">
            <div className="landing__profileImage">
              <img
                alt="Matterholt profile pic"
                src="./images/randomPic.png"
                width="250px"
              />
            </div>

            <div className="landing__IntroContent">
              <p className="intro__textCard">
                NEXT.js is my go to in frameworks. To build apps. Interested in
                Full-stack, I want to know how all works together and build a
                full web application.<a href="/about">about</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}