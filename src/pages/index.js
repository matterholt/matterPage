import { graphql, Link } from "gatsby";
import React from "react";

import { Layout } from "../components/Layout";

import "../style/global.css";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const content__article = css`
  font-size: 1.5rem;
  background-color: var(--main-white);
  display: flex;
  flex-direction: column-reverse;
  margin-top: 25px;
  padding: 15px;
  min-width: 500px;
  box-shadow: 5px 7px 9px black;
`;

const content_header = css`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 10px;
  border-bottom: solid 2px var(--fav-accent);
`;

const blog_date = css`
  font-size: 1rem;
  color: gray;
  width: 100%;
  text-align: right;
`;

const blog_excerpt = css`
  margin-top: 15px;
  color: var(--fav-dark);
`;

const content_header__h1 = css`
  font-size: 2.5rem;
  font-weight: 900;
  margin: 2px;
`;

export default ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
        return (
          <article css={content__article} key={id}>
            <Link to={fields.slug}>
              <div css={content_header}>
                <p css={blog_date}>{frontmatter.date}</p>
                <h1 css={content_header__h1}>{frontmatter.title}</h1>
              </div>
              <p css={blog_excerpt}>{excerpt}</p>
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
