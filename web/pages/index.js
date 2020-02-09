import style from "../style/index.module.css";
import Layout from "../component/Layout";

const Content = () => {
  return (
    <div className="project_container">
      <section className="description">
        Things that Developers do. Create!! They create matter on the computer.
        We solve task and problems using programing languages. There are some
        many things to consider and so many other avenues that can be taken.
      </section>
    </div>
  );
};

function HomePage() {
  return (
    <main className="main">
      <Layout children={<Content />} title="Website, where I create" />
    </main>
  );
}

export default HomePage;
