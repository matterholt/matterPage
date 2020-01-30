import style from "../style/index.module.css";
import Layout from "../component/Layout";

import BlogSvg from "../assets/blogSVG.js";
import AboutSvg from "../assets/aboutSVG";
import ProjectSvg from "../assets/projectSVG";

const ItemCard = props => {
  const { title, svg_icon } = props;
  return (
    <div className="itemCard">
      {svg_icon}
      <p>{title}</p>
      <style jsx>{`
        .itemCard {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          margin: 10px;
          width: 100px;
          height: 150px;
          color: var(--main-blue);
          background: var(--light-accent);
        }
      `}</style>
    </div>
  );
};

const FirstType = () => {
  return (
    <div className="description">
      <p>
        Matthew Atterholt, <br /> I enjoy using programing to solve problems. I
        find myself using Python to create small application. I being a user and
        a developer, communicate with the team to insure that my application
        will to assist the them to complete task and ship results.
      </p>
      <p>
        I know a bit about front-end development and building web apps with
        React.js. I have dabble back-end development using Flask and Express.js
        to build REST API. To keep all the data organize I worked with building
        relational tables using sqlite and PostgreSQL.
      </p>
      <p>
        Check out my Projects to see what I have built or my Notes to see the
        things that I have learn
      </p>
    </div>
  );
};

const SecondHalf = () => {
  return (
    <div className="cards">
      <ItemCard title="Projects" svg_icon={<ProjectSvg />} />
      <ItemCard title="Blog" svg_icon={<BlogSvg />} />
      <ItemCard title="About" svg_icon={<AboutSvg />} />
      <style jsx>
        {`
          .cards {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-evenly;
            min-height: 150px;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

function HomePage() {
  return (
    <main className="main">
      <section>
        <Layout
          children={<FirstType />}
          subtitle="a Developer and problem solver"
        />
      </section>
    </main>
  );
}

export default HomePage;
