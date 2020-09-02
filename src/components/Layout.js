import React, { Children } from "react";
import Header from "../components/Header";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const container = css`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: var(--main-white);
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Header siteTitle={title} siteDescription={description} />
      <main css={container}>{children}</main>
    </div>
  );
};
