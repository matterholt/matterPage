import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../component/Layout";
const Description = () => {
  return (
    <>
      <div className="description">
        <p>
          My projects consist of script and app that aid in my daily work.
          Python allows me to extract or add data to the a database or a simple
          directory creation for the current project that I'm working on.
        </p>
        <p>
          I would like to see and create a way to share and track data with in
          the group and would allow better direction and understanding among the
          team.
        </p>
      </div>
    </>
  );
};

const BlogContent = () => {
  return (
    <div className="project_container">
      <Description />
    </div>
  );
};

export default function BogPost(props) {
  return (
    <main className="main">
      <Layout title="Dev Notes">
        <BlogContent />
        <ul className="project_container">
          {props.posts.map(({ document: { data }, slug }) => (
            <li className="content__container">
              <Link
                href={{ pathname: "../post", query: { id: slug } }}
                key={slug}
              >
                <a className="content_title">{data.title}</a>
              </Link>
              <p>{data.description} </p>
            </li>
          ))}
        </ul>
      </Layout>
    </main>
  );
}

BogPost.getInitialProps = async function() {
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
};
