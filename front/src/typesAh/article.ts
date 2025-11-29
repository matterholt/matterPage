export interface ArticleCollection {
  id: string;
  data: {
    title: string;
    slug: string;
    publishDate: Date;
    tags: string[];
  };
  body: string;
  filePath: string;
  digest: string;
  rendered: {
    html: string;
    metadata: {
      headings: any[];
      localImagePaths: string[];
      remoteImagePaths: string[];
      frontmatter: Record<string, any>;
      imagePaths: string[];
    };
  };
  collection: string;
  slug: string;
  render: () => void;
}
