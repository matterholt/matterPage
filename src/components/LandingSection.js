import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

import SocialLink from "./SocialLink";

const landingsection = css`{
    margin: 50px 0;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 25px;
    min-height: 50vh;
    width:100vw;
    font-size: 2rem;
    @media (max-width: 768px) {
        margin: 0;
      padding: 0;
}`;

const landing_card = css`{
  line-height: 1.6;
  color: var(--fav-dark);
  background-color: var(--main-white);
  width: 75%;
  padding: 50px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  @media (max-width: 768px) {
         width: auto;
         padding: 10px;
}`;



export default function LandingSection() {
  return (
    <section id="landing" css={landingsection}>
      <div css={landing_card}>
        <div>
          <h3>FullStack Engineer that specialized in React</h3>
        </div>
        <div>
          <p>
            At the ready to help and eager to learn from others. I have
            been working with React.js and other React libraries to build
            components and web applications. NEXT.js is my go-to framework to
            build web applications. I am fairly conformable with Python Flask
            and Node Express frameworks to build a basic Backend. My goal is to
            keep my code clean and maintainable. I strive to build a product
            that solves the client’s goals and contributes to the overall
            success of the product.
          </p>
        </div>
      </div>
      <SocialLink />
    </section>
  );
}