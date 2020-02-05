import Layout from "../component/Layout";
import ItemListCards from "../component/ItemList";

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
  const repos = [
    {
      title: `Work Hour Log`,
      purpose: `We worked in logging the hours with excel. Creating a front end web app to calculate the hours for the week. 
        Primary language was JavaScript with REACT.js`,
      link: `https://github.com/matterholt/workHourLog`
    },
    {
      title: `Python work scripts`,
      purpose: `Where I gotten my start and found the ways to create scripts to 
      help with the task with our daily work !! review`,
      link: `https://github.com/matterholt/WeldThicknessCalculator`
    },
    {
      title: `Abaqus Static curve script`,
      purpose: `A script that works with the Abaqus results odb. It has a library that is specific
      and only works with Python2`,
      link: `https://github.com/matterholt/abaqusStaticCurveCompiler`
    },
    {
      title: `Weld Thickness Calculator`,
      purpose: `Simple calculator that calculates the thickness of the weld for a simulation`,
      link: `https://github.com/matterholt/...`
    },
    {
      title: `Build Me`,
      purpose: `A project that is started up with a co-worker. We started this project to learn 
      the full stack development. Where my primary role is to work on the backend`,
      link: `https://github.com/TEAM-BUILDME/tool-share-backend`
    },
    {
      title: `FEA tracking system`,
      purpose: `In the group I'm apart of information is passed using power point. A bug tracking program 
      inspired me to build a web app. I hope to be able incorporate the function that a bug tracking application 
      and apply it our work flow.`,
      link: `https://github.com/matterholt/fea_tracker`
    }
  ];

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
