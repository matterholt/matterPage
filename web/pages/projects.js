import Layout from "../component/Layout";

const Content = () => {
  return (
    <>
      <h2>Idea have been made</h2>
      <div className="description">
        <p>
          My projects consist of script and app that aid in my daily work.
          Python allows me to extract or add data to the a database or a simple
          directory creation for the current project that I'm working on.
        </p>
        <p>
          I would like to see and create a way to share and track data with in
          the group and would allow better direction and understanding among the
          team.
        </p>
      </div>
    </>
  );
};

export default function Project() {
  return (
    <main className="main">
      <Layout children={Content} subtitle="Projects" />
    </main>
  );
}
