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
  max-width: 500px;
  box-shadow: 1px 5px 25px #cacdd1;
`;

const content_header = css`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row-reverse;
  justify-content: space-between;
  padding-bottom: 10px;
  color: var(--fav-dark);
  border-bottom: solid 2px var(--fav-accent);
`;

const content__header_date = css`
  font-size: 1rem;
  color: gray;
  text-align: right;
`;

const content_header_title = css`
  font-size: 2rem;
  font-weight: 900;
  margin: 2px;
`;

const content_excerpt = css`
  margin-top: 15px;
  color: var(--fav-dark);
`;

export default ({ data }) => {
  return (
    <Layout>
      {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => {
        return (
          <article css={content__article} key={id}>
            <Link to={fields.slug}>
              <div css={content_header}>
                <p css={content__header_date}>{frontmatter.date}</p>
                <h1 css={content_header_title}>{frontmatter.title}</h1>
              </div>
              <p css={content_excerpt}>{excerpt}</p>
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
