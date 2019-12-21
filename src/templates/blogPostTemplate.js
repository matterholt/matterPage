import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import React from 'react';
import {Layout} from '../components/Layout';
import Dump from '../components/Dump';

export default ({data, pageContext}) => {
  const {frontmatter, body} = data.mdx;
  const {previous, next} = pageContext;

  return (
    <Layout>
      <Dump previous={previous}></Dump>
      <Dump next={next}></Dump>
      <h1> {frontmatter.title} </h1>
      <p>{frontmatter.data}</p>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query PostsBySLug($slug: String!) {
    mdx(fields: {slug: {eq: $slug}}) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
