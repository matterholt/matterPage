const { useEffect, useState } = React;
const { Spring } = ReactSpring;

function Tags({ tags }) {
  const tagList = tags.map((x, y) => <p className="tag">{x}</p>);
  return <div className="tag_box">{tagList}</div>;
}

function BlogPost({ title }) {
  const frontmatter = {
    id: 1,
    title: "First Blog Post on Gatsby",
    date: "2020/05/31",
  };
  const excerpt =
    "Creating a foundation in Programing, using code and programing to levearge the work space. I want to be better and learn all things. OK not really but I have curiosity";

  return (
    <article key={frontmatter.id}>
      <Tags tags={["blog", "front-end", "design"]} />
      <a className="blog_content" href="#">
        <div className="content_header">
          <p className="blog_date">{frontmatter.date}</p>
          <h1>{title}</h1>
        </div>
        <p className="blog_excert">{excerpt}</p>
      </a>
    </article>
  );
}

function App() {
  return (
    <div>
      <Header
        siteTitle="Matterholt Devs"
        siteDescription="Web Technoglies and Software Development"
      />
      <main>
        <BlogPost title="Ten things I wish I new before i started" />
        <BlogPost title="Second Post might have a longer title" />
      </main>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
