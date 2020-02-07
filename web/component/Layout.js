import React from "react";
import Nav from "./nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  const { title } = props;
  return (
    <div className="layout">
      <Nav />
      <Header pageName={title} />
      <div className="content">{props.children}</div>
      <Footer />
      <style jsx>{`
        .layout {
          width: 100vw;
          display: flex;
          flex-flow: column;
        }
      `}</style>
    </div>
  );
}
