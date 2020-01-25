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
          padding: 10px;
          margin: 10px;
          width: 100px;
          height: 150px;
          background: hsl(40, 89%, 55%);
          color: #291528;
        }
      `}</style>
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
        <h1 className={style.title}>
          <span className={style.title_sectionOne}>Matterholt </span>
          <span className={style.title_sectionTwo}>The Developer</span>
        </h1>
        <p className={style.name}>Matthew Atterholt</p>
      </div>

      <div>
        <p className={style.description}>
          Front End developer whom know a bit about backend and databases. with
          a splash of Python to help automate some daily task
        </p>
      </div>
      <div className={style.cards}>
        <ItemCard title="Projects" svg_icon={<ProjectSvg />} />
        <ItemCard title="Blog" svg_icon={<BlogSvg />} />
        <ItemCard title="About" svg_icon={<AboutSvg />} />
      </div>
      <p className={style.description}>
        Take a look at some projects or even by blog where I write about the
        problems that have ran into I want to know more about my careers and
        other interest than check out the about
      </p>
      <Nav />
    </main>
  );
}

export default HomePage;
