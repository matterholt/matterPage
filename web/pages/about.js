import Layout from "../component/Layout";

const Content = () => {
  return (
    <div className="project_container">
      <div className="description">
        <h2>Developer and problem solver</h2>
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
        <p>
          Check out my Projects to see what I have built or my Notes to see the
          things that I have learn
        </p>
        <p>
          Work as a Validation Technician for 14 years. Started to learn Python
          to help automate task that would slow down and annoy the team. As my
          knowledge grew so did my desire to help with other task and that could
          bring more structure to the group.
        </p>
        <p>
          I have worked on a 68 mustang that was drivable for my wedding. Later
          I able to build a small black smith shop at my house, where I take
          scrap steel and pound it in to shape. I enjoy building and working
          with wood as well.
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
