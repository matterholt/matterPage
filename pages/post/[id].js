import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function BlogTemplate(props) {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <div>
      <article>
        <h1>{frontmatter.title}</h1>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </div>
  );
}

BlogTemplate.getInitalProps = async function(context) {
  const { slug } = context.query;
  const content = await import(`../../POST/${slug}.md`);
  const config = await import(`../../data.config.json`);
  const data = matter(content.default);
  return {
    siteTitle: config.title,
    ...data
  };
};
