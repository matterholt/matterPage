import Link from "next/link";
import BlogList from "../component/BlogList";

export default function Blog(props) {
  return (
    <div>
      <h1>BLOG IT</h1>
      <section>
        <BlogList allBlog={props.Blogs} />
      </section>
    </div>
  );
}
//https://blog.toukopeltomaa.com/next-js-markdown-blog#gets-posts-from-posts-folder

Blog.getInitialProps = async function() {
  const siteConfig = await import(`../data/config.json`);
  const posts = (context => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");

      const value = values[index];
      const document = matter(value.default);

      return {
        document,
        slug
      };
    });

    return data;
  })(require.context("../POST", true, /\.md$/));

  return {
    allBlogs: posts,
    ...siteCongig
  };
};
