import style from "../style/index.module.css";
import Layout from "../component/Layout";

const Content = () => {
  return (
    <div className="project_container">
      <section className="description">
        <p>
          Matthew Atterholt, <br /> I enjoy using programing to solve problems.
          I find myself using Python to create small application. I being a user
          and a developer, communicate with the team to insure that my
          application will to assist the them to complete task and ship results.
        </p>
      </section>
    </div>
  );
};

function HomePage() {
  return (
    <main className="main">
      <Layout children={<Content />} title="Where I create" />
    </main>
  );
}

export default HomePage;
