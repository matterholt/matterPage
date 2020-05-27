import { graphql, Link } from "gatsby";
import React from "react";

import { Layout } from "../components/Layout";

import "../style/global.css";

export default ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
        return (
          <article key={id}>
            <Link to={fields.slug}>
              <div className="content_header">
                <p className="blog_date">{frontmatter.date}</p>
                <h1>{frontmatter.title}</h1>
              </div>
              <p className="blog_excert">{excerpt}</p>
            </Link>
          </article>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
        fields {
          slug
        }
      }
    }
  }
`;
