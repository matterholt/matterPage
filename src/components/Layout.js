import React, { Children } from "react";
import Header from "../components/Header";
import { useSiteMetadata } from "../hooks/useSiteMetaData";

import styled from "@emotion/styled";
//import { css } from "@emotion/core";

const Container = styled.div`
  background-color: #39a0ed;
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Layout = ({ children }) => {
  const { title, description, other } = useSiteMetadata();

  return (
    <div>
      <Header siteTitle={title} siteDescription={description} />
      <main>
        <p>{other}</p>
        {children}
      </main>
    </div>
  );
};
