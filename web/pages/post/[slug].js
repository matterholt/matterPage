import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import client from "../../client";

function urlFor(source) {
  return imageUrlBuilder(client).image(source);
}

const Post = props => {
  const {
    title = "Missing title",
    name = "Missing Name",
    categories,
    authorImage
  } = props;
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
      {authorImage && (
        <ul>
          <img
            src={urlFor(authorImage)
              .width(75)
              .url()}
          />
        </ul>
      )}
    </article>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author ->name,
  "categories": categories[]-> title,
  "authorImage" : author->image
}`;

Post.getInitialProps = async function(context) {
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};
export default Post;
