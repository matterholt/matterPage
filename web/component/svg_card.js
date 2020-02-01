import BlogSvg from "../assets/blogSVG.js";
import AboutSvg from "../assets/aboutSVG";
import ProjectSvg from "../assets/projectSVG";
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
