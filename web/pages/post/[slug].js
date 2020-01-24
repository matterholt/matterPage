import groq from "groq";
import client from "../../client";
const Post = props => {
  const { title = "Missing title", name = "Missing Name", categories } = props;
  return (
    <article>
      <h1>{title}</h1>
      <span>by {name}</span>
      {categories && (
        <ul>
          Posted in{" "}
          {categories.map(category => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author ->name,
  "categories": categories[]-> title
}`;

Post.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
export default Post;
