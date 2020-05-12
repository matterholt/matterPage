import React from "react";
import styled from "@emotion/styled";
//import { css } from "@emotion/core";

import { useSiteMetadata } from "../hooks/useSiteMetaData";

const Container = styled.div`
  background-color: #39a0ed;
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default () => {
  const { title, description, other } = useSiteMetadata();

  return (
    <Container>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{other}</p>
    </Container>
  );
};
