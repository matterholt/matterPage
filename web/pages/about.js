import Layout from "../component/Layout";
const PageName = () => {
  return (
    <div>
      <h2 className="subtitle">A developer and other</h2>
    </div>
  );
};
const Content = () => {
  return (
    <>
      <PageName />
      <div className="description">
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
    </>
  );
};

function AboutPage() {
  return (
    <main className="main">
      <Layout children={<Content />} subtitle="About" />
    </main>
  );
}
export default AboutPage;
