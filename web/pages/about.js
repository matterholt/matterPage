import Layout from "../component/Layout";

const Content = () => {
  return (
    <div className="project_container">
      <div className="description">
        <p>
          I know a bit about front-end development and building web apps with
          React.js. I have dabble back-end development using Flask and
          Express.js to build REST API. To keep all the data organize I worked
          with building relational tables using sqlite and PostgreSQL.
        </p>
        <p>
          I took this brain type quiz, I am an alchemist, meaning the things
          that bring me excitement is exploring different possibilities and
          curious about new things, discovering interesting patterns across
          multiple context. Coding is a good playground where I can thrive in
          discovery and variety. To sum it up, a Jack of all trades.
        </p>

        <p>
          Work as a Validation Technician for 14 years. Started to learn Python
          to help automate task that would slow down and annoy the team. As my
          knowledge grew so did my desire to help with other task and that could
          bring more structure to the group.
        </p>
      </div>
    </div>
  );
};

function AboutPage() {
  return (
    <main className="main">
      <Layout children={<Content />} title="About Me" />
    </main>
  );
}
export default AboutPage;
