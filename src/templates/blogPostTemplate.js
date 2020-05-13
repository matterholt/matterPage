import React from "react";
import { graphql } from "gatsby";
import { MDXRender } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRender>{body}</MDXRender>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;
//"/2019/2019-06-01-hello-world/"
