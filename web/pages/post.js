import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
export default class extends React.Component {
  static async getInitialProps({ query }) {
    const post = await import(`../posts/${query.id}.md`);
    const document = matter(post.default);
    return {
      ...document
    };
  }
  render() {
    return (
      <>
        <h1>{this.props.data.title}</h1>
        <i>{`Written by ${this.props.data.writtenBy} | ${this.props.data.date}`}</i>
        <ReactMarkdown source={this.props.content} />
      </>
    );
  }
}
