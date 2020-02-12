import Layout from "../component/Layout";
import Link from "next/link";
import repos from "../data/projectList";

const Description = () => {
  return (
    <div className="description">
      <p>
        Inspired by my current FEA engineering position. There are a few using
        Python that automate task and create a better work flow for the
        engineers. I have also use web technologies to build some small web apps
        that help with some other task.
      </p>
    </div>
  );
};

function ItemCard(props) {
  const { title, content, link } = props.itemsList;
  return (
    <li key={props.keyID} className="content__container">
      <h3 className="content_title">{title}</h3>
      <p> {content}</p>
      <Link href={link} prefetch={false}>
        <a>{link}</a>
      </Link>
    </li>
  );
}

export default function Project() {
  const ProjectItemList = repos.map((repoItem, repoKey) => {
    return <ItemCard itemsList={repoItem} keyID={repoKey} />;
  });

  return (
    <main className="main">
      <Layout title="Projects">
        <Description />
        <ul className="project_container">{ProjectItemList}</ul>
      </Layout>
    </main>
  );
}
