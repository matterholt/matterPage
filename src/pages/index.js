import React from "react"

import { Layout } from "../components/Layout";
import LandingSection from "../components/LandingPage/LandingSection"
/** @jsx jsx */
import { jsx, css } from "@emotion/core";


const WhatIdo = () => (
    <section css={landing_Section}>
        <h2>What I do</h2>
    </section>
)

const Projects = () => (
    <section css={landing_Section}>
        <h2>Projects</h2>
    </section>
)
const LatestPost = () => (
  <section css={landing_Section}>
    <h2>Latest Post</h2>
  </section>
);

const landing_Section = css`
  min-height: 100vh;
  display: flex;
   line-height: 40px;
   margin: 25px;
`;

const section_title = css`
  font-weight: 900;
  font-size: 3.2rem;
  color: var(--fav-dark);
`;
const section_content = css`
    font-size: 2rem;
`;
const Banner = () => (
    <section css={landing_Section}>
        <h2 css={section_title}>Who am I</h2>
        <p css={ section_content}>
      I work on web apps that solve problems and help people get things done.
      Primarily focused on building a wide spread of knowledge in building
      software. I choose to have a deep understanding of building UI with
      React.js. Always eager to help others, learn from fellow developers, and
      build efficient code.
    </p>
  </section>
);


export default () =>(
    <Layout>
        <Banner/>
        <WhatIdo />
        <Projects />
        <LatestPost/>
    </Layout>
    )