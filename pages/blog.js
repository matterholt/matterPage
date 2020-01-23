import Link from "next/link";

const Intro = () => {
  return (
    <>
      <h1>Notes for web</h1>
      <p> also known as blogging</p>
      <p>
        I love writing in my note book the pen and paper could write for days.
        Now I will open up and share the thing that have sparked my interests
      </p>
    </>
  );
};

const PostLink2 = props => {
  <li>
    <Link href={`/post?=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>;
};

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <div>
      <h1>BLOG IT</h1>
      <ul>
        <PostLink id="hello next" />
        <PostLink id="hello nextNext" />
        <PostLink id="hello nextNextnext" />
      </ul>
    </div>
  );
}
