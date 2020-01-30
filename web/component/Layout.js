import React from "react";
import Nav from "./nav";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <div>
      <Nav />
      <Header subtitle={props.subtitle} />
      <div className="content">{props.children}</div>
      <Footer />
      <style jsx>
        {`
          .content {
            min-height: 60vh;
          }
        `}
      </style>
    </div>
  );
}
