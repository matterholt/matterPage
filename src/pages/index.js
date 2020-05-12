import React from "react";

import { useSiteMetadata } from "../hooks/useSiteMetaData";

export default () => {
  const { title, description, other } = useSiteMetadata();

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{other}</p>
    </>
  );
};
