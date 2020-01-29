import Nav from "../component/nav";
import style from "./index.module.css";
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
          flex-flow: column;
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

const WhatAbout = () => {
  return (
    <div>
      <p>
        I am interested in solving problems and help other get the job done.
      </p>
    </div>
  );
};

const FirstType = () => {
  return (
    <div className={style.description}>
      <p>
        Matthew Atterholt, <br /> I enjoy using programing to solve problems.
        Where my interested is peeked when I can work with with my engineering
        team to use programing to improve work flow. I use Python build small
        applications assist with daily task.
      </p>
      <p>
        I know a bit about front-end development and building web apps with
        React.js. I have dabble back-end development using Flask and Express.js
        to build REST API. To keep all the data organize I worked with building
        relational tables using sqlite and PostgreSQL.
      </p>
    </div>
  );
};

const SecondHalf = () => {
  return (
    <div className={style.details}>
      <p className={style.description_other}>
        Take a look at some projects or even by blog where I write about the
        problems that have ran into I want to know more about my careers and
        other interest than check out the about
      </p>
      <div className={style.cards}>
        <ItemCard title="Projects" svg_icon={<ProjectSvg />} />
        <ItemCard title="Blog" svg_icon={<BlogSvg />} />
        <ItemCard title="About" svg_icon={<AboutSvg />} />
      </div>
    </div>
  );
};
function HomePage() {
  return (
    <main className={style.main}>
      <link
        href="https://fonts.googleapis.com/css?family=Bangers&display=swap"
        rel="stylesheet"
      />

      <div className={style.landing}>
        <Nav />
        <div className={style.title}>
          <h1 className={style.title_sectionOne}>Matterholt</h1>
          <h2 className={style.title_sectionTwo}>
            a Developer and problem solver
          </h2>
        </div>
        <FirstType />
      </div>
    </main>
  );
}

export default HomePage;
