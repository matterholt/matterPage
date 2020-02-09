import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../component/Layout";

export default function Post(props) {
  return (
    <main className="main">
      <Layout title="Dev Post">
        <div className="project_container">
          <h1>{props.data.title}</h1>
          <i>{`Written by ${props.data.writtenBy} | ${props.data.date}`}</i>
          <ReactMarkdown source={props.content} />
        </div>
      </Layout>
    </main>
  );
}

Post.getInitialProps = async function({ query }) {
  const post = await import(`../posts/${query.id}.md`);
  const document = matter(post.default);
  return {
    ...document
  };
};
