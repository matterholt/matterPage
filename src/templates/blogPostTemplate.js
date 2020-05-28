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
const blog__post = css``;
const content__article = css`
  font-size: 1.5rem;
  background-color: var(--main-white);
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 15px;
  max-width: 500px;
  box-shadow: 5px 7px 9px black;
  line-height: 20px;
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

      <div>
        {previous === false ? null : (
          <>
            {previous && (
              <Link to={previous.fields.slug}>
                <p>{previous.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
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
