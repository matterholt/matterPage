import React from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";

/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const content_header = css`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row-reverse;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: solid 2px var(--fav-accent);
`;

const content__article = css`
  font-size: 1.5rem;
  background-color: var(--main-white);
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 15px;
  border-bottom: solid 2px var(--fav-accent);
  width: 90%;
  max-width: 650px;
`;

const articleNav = css`
  display: flex;
  justify-content: center;
  margin: 25px;
`;
const articleNav_action = css`
  font-size: 1.5rem;
  margin: 25px;
  background-color: #3d555d;
  padding: 15px;
  border-radius: 10px;
  min-width: 100px;
  text-align: center;
  color: var(--main-white);
`;

export default ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <div css={content__article}>
        <div css={content_header}>
          <p>{frontmatter.date}</p>
          <h1>{frontmatter.title}</h1>
        </div>

        <MDXRenderer>{body}</MDXRenderer>
      </div>

      <div css={articleNav}>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <p css={articleNav_action}>{previous.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p css={articleNav_action}>{next.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
    }
  }
`;
