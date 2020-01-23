import { useRouter } from "next/router";

// useRouter being added to a component other than
// the exported page

const Content = () => {
  const router = useRouter();
  return (
    <>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content</p>
    </>
  );
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
