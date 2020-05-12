import React from "react";
import Layout from "../components/Layout";

export default () => {
  const { title, description, other } = useSiteMetadata();

  return <Layout />;
};
