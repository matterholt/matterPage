import Layout from "../component/Layout";
import Link from "next/link";
import repos from "../data/projectList";

const Description = () => {
  return (
    <div className="description">
      <p>
        Most of my project have been strongly inspired by my engineering
        position in the FEA group. The technologies have consist of Python and
        JavaScript.
      </p>
    </div>
  );
};
/*
temporary moved from 

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
*/
export default function Project() {
  return (
    <main className="main">
      <Layout title="Projects">
        <Description />

        <ul className="project_container">
          {repos.map((repoItem, repoKey) => {
            return (
              <li key={repoKey} className="content__container">
                <h3 className="content_title">{repoItem.title}</h3>
                <p> {repoItem.content}</p>
                <Link href={repoItem.link} prefetch={false}>
                  <a>To Github Repository</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </Layout>
    </main>
  );
}
