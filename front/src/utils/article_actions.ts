import type { ArticleCollection } from "@typesAh/article";

export function articlePublish(data) {
  const buildDate = new Date();

  const isProducts = import.meta.env.PROD;

  const afterPublishDate = new Date(data.publishDate) <= buildDate;

  return afterPublishDate;
}


export function firstParagraph(content) {
  return content.split("\n").filter((y) => y.length > 0)[0];
}


export function collectAllTags(blogPosts: ArticleCollection[]): string[] {
  // takes the blog post for all tag that are active tags

  const allTags = blogPosts.flatMap(post => post.data.tags || []);
  return [...new Set(allTags)];
}
