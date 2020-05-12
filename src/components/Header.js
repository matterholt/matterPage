import React from "react";
import { Link } from "gatsby";

export default function Header({ siteTitle, siteDescription }) {
  return (
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  );
}
