import React from "react";
import Head from "./Head";
import Nav from "./nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { title } = props;
  return (
    <>
      <Head />
      <div className="layout">
        <Header pageName={title} />
        <Nav />
        <div className="content">{props.children}</div>
        <style jsx>{`
          .layout {
            width: 100vw;
            display: flex;
            flex-flow: column;
          }
        `}</style>
      </div>
    </>
  );
}
