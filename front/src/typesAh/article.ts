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
// {"frontmatter":{"title":"Things that will be install on the next machine.",
// "slug":"new-machine-installs",
//"publishDate":"2025-11-17T00:00:00.000Z",
//"tags":["terminal","TUI","installs","setup","dev_environment"]},
//"file":"/home/matterholt/Work/sites/matterPage/front/src/content/articles/2025-11-17_Standard_Installs_2025.md"}
//
interface ArticleFrontMatter {
  title: string;
  slug: string;
  publishDate: string;
  tags: string[];
}
export interface FrontMatterContent {
  frontmatter: ArticleFrontMatter
}
