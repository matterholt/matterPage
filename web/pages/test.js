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
        const value = values[index].default;
        // Parse document
        const document = matter(value);
        console.log(slug);
        return {
          document,
          slug
        };
      });
      return data;
    })(require.context("../posts", true, /\.md$/));
    return {
      posts
    };
  }
  render() {
    return (
      <>
        <h1>Posts</h1>
        <ul>
          {this.props.posts.map(({ document: { data }, slug }) => (
            <li>
              <Link
                href={{ pathname: "/post", query: { id: slug } }}
                key={slug}
              >
                <a>{data.title}</a>
              </Link>
              <p>{data.description} </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
