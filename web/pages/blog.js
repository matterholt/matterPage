import React from "react";
import Layout from "../component/Layout";
import BlogList from "../component/Blog_list";

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
      <h2 className="repo_project">Dev Notes</h2>
      <Description />
    </div>
  );
};
/*
export default function Blog(props) {
  return (
    <main className="main">
      <Layout children={<BlogContent />} subtitle="Programer Notes" />
    </main>
  );
}
*/
export default function Blog(props) {
  return (
    <main className="main">
      <BlogList />
    </main>
  );
}
