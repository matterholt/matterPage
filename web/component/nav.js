import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bar">
      <ul className="navlist">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .bar {
          background: var(--light_white);
          border-bottom: 1px solid var(--main_orange);
        }

        .navlist {
          list-style: none;
          display: flex;
          flex-flow: row;
          text-align: center;
          justify-content: space-evenly;
          margin: 0;
          padding: 0;
          height: 50px;
          font-size: 1.2rem;
        }
        li {
          width: 52px;
          text-align: center;
          margin: 5px;
          align-self: center;
        }
      `}</style>
    </nav>
  );
}
