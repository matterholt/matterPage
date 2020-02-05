import React from "react";
import matter from "gray-matter";
import Link from "next/link";

export default class extends React.Component {
  static async getInitialProps() {
    // Get posts from folder
    const posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join(".");
        const value = values[index];
        // Parse document

        const document = matter(value);
        return {
          document,
          slug
        };
      });
      return data;
    })(require.context("../post", true, /\.md$/));
    return {
      posts
    };
  }
  render() {
    return (
      <>
        <h1>Posts</h1>
        {this.props.posts.map(({ document: { data }, slug }) => (
          <Link href={{ pathname: "/post", query: { id: slug } }} key={slug}>
            <h2>{data.title}</h2>
          </Link>
        ))}
      </>
    );
  }
}
