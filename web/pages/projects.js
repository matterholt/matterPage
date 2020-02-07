import Layout from "../component/Layout";
import ItemListCards from "../component/ItemList";
import repos from "../data/projectList";
const Description = () => {
  return (
    <>
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

const ProjectList = () => {
  const ProjectItemList = repos.map((repoItem, repoKey) => {
    return <ItemListCards itemsList={repoItem} key={repoKey} />;
  });

  return (
    <div className="project_container">
      <h2 className="repo_project">Project list</h2>
      <Description />
      {ProjectItemList}
    </div>
  );
};

export default function Project() {
  return (
    <main className="main">
      <Layout children={<ProjectList />} subtitle="Projects" />
    </main>
  );
}
