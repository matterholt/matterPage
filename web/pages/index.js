import style from "../style/index.module.css";
import Layout from "../component/Layout";

const Content = () => {
  return (
    <div className="project_container">
      <section className="description">
        <p>
          Things that Developers do. Create!! They create matter on the
          computer. We solve task and problems using programing languages. There
          are some many things to consider and so many other avenues that can be
          taken.
        </p>
        <p>
          Matthew Atterholt, <br /> I enjoy using programing to solve problems.
          I find myself using Python to create small application. I being a user
          and a developer, communicate with the team to insure that my
          application will to assist the them to complete task and ship results.
          I know a bit about front-end development and building web apps with
          React.js. I have dabble back-end development using Flask and
          Express.js to build REST API. To keep all the data organize I worked
          with building relational tables using sqlite and PostgreSQL.
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
