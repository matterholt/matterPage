import React from "react";
import Link from "next/link";
import groq from "groq";
import client from "../client";

import Nav from "../component/nav";

function Blog(props) {
  const { posts = [] } = props;
  return (
    <main className="main">
      <Nav />
      <div className="title">
        <h1>Programer Notes</h1>
        <h2> Ideas and new Knowledge</h2>
      </div>
      <div className="description">
        <p>
          CURRENTLY USING SANITY.IO, IT IS GOOD BUT TOO MUCH FOR THIS PAGE,
          GOING TO MOVE TO MDX
        </p>
        {posts.map(
          ({ _id, title = "", slug = "", _updatedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>{" "}
                ({new Date(_updatedAt).toDateString()})
              </li>
            )
        )}
      </div>
    </main>
  );
}

Blog.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `)
});

export default Blog;
