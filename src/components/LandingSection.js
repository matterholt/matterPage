import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import SocialLink from "./SocialLink"

const landingsection = css`
   {
    margin: 50px 0;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    min-height: 50vh;
    font-size: 2rem;
    @media (max-width: 768px) {
        margin: 5px 0;
  }
`;

const landing_card = css`
  line-height: 1.6;
  color: var(--fav-dark);
  background-color: var(--main-white);
  width: 75%;
  padding: 50px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
         width: 100%;
`;



export default function LandingSection() {
  return (
    <section id="landing" css={landingsection }>
      <div css={landing_card}>
        <div>
          <h3>Front End Engineer</h3>
        </div>
        <div>
          <p>
            Specialized in React. I build web applications, that solve problems
            and help people get things done. Always eager to help others, learn
            from fellow developers. NEXT.js is my go to in frameworks to build
            apps. I have done some work in the Backend development to understand
            basic concepts. I enjoy using JavaScript and Python.
          </p>
        </div>
      </div>
      <SocialLink />
    </section>
  );
}