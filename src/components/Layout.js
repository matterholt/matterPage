import React, { Children } from "react";
import Header from "../components/Header";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const container = css`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const Layout = ({ children }) => {
  const { title, description, other } = useSiteMetadata();

  return (
    <div>
      <Header siteTitle={title} siteDescription={description} />
      <main css={container}>
        <p>{other}</p>
        {children}
      </main>
    </div>
  );
};
