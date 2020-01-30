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
          <Link href="/about">
            <a>About</a>
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
      </ul>
      <style jsx>{`
        .bar {
          width: 100%;
          padding: 10px 0;
          margin-bottom: 10px;
          background: var(--light-accent);
          width: 100%;
        }

        .navlist {
          list-style: none;
          display: flex;
          flex-flow: row;
          text-align: center;
        }
        li {
          width: 52px;
          text-align: center;
        }
      `}</style>
    </nav>
  );
}
