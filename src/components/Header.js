import React from "react";
import { Link } from "gatsby";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const header = css`
   {
    font-family: Helvetica, Arial, sans-serif;
    background-color: var(--main-white);
    color: var(--fav-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    border-bottom: 2px solid var(--fav-accent);
    h1 {
      font-size: 3.5rem;
      margin: 2px;
      font-weight: 900;
    }
    p {
      font-weight: 100;
      font-size: 1.2rem;
    }
  }
`;

export default function Header({ siteTitle, siteDescription }) {
  return (
    <header css={header}>
      <div>
        <Link to="/">
          <h1>{siteTitle}</h1>
        </Link>
        <p>{siteDescription}</p>
      </div>

    </header>
  );
}
