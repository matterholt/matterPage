import style from "../style/index.module.css";
import Layout from "../component/Layout";

const Content = () => {
  return (
    <>
      <h2 className="subtitle"> Things that Developers do. Create!!</h2>
      <section className="writeup">
        They create matter on the computer. We solve task and problems using
        programing languages. There are some many things to consider and so many
        other avenues that can be taken.
      </section>
    </>
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
