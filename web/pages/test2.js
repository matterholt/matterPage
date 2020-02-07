import React from "react";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "../component/Layout";

export default function BogPost(props) {
  return (
    <main className="main">
      <Layout>
        <h1>Posts</h1>
        <ul>
          {props.posts.map(({ document: { data }, slug }) => (
            <li>
              <Link
                href={{ pathname: "../post", query: { id: slug } }}
                key={slug}
              >
                <a>{data.title}</a>
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
    console.log(keys);
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
};

/*

BlogTemplate.getInitialProps = async function(context) {
  // context contains the query param

  const { slug } = context.query
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/${slug}.md`)
  // also grab the config file so we can pass down siteTitle
  const config = await import(`../../data/config.json`)
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default)
  return {
    siteTitle: config.title,
    ...data,
  }
}


BLOG INDEX


// src/pages/index.js
Index.getInitialProps = async function() {


  const siteConfig = await import(`../data/config.json`)


  // get all .md files from the src/posts dir
  const posts = (context => {
    // grab all the files matching this context
    const keys = context.keys()


    // grab the values from these files
    const values = keys.map(context)
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, '')
        .split('.')
        .slice(0, -1)
        .join('.')
      // get the current file value
      const value = values[index]
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default)
      // return the .md content & pretty slug
      return {
        document,
        slug,
      }
    })
    // return all the posts
    return data
  })(require.context('../posts', true, /\.md$/))

  return {
    allBlogs: posts,
    ...siteConfig.default,
  }
}

*/
