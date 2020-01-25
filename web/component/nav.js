import Link from "next/link";
import style from "./nav_style.module.css";

export default function Nav() {
  return (
    <nav className={style.bar}>
      <ul className={style.navlist}>
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
        li {
          width: 52px;
          text-align: center;
        }
      `}</style>
    </nav>
  );
}
