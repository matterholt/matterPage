// siteMetadata common pieces of data
// remove from the module to clean it up
const siteMetadata = {
  title: `Matterholt Dev`,
  description: `FULL STACK, REACT.js, OPEN TO LEARN, DIVERSE IN KNOWLEDGE`,
  dev: `Matterholt`,
};

/**
 *  defines your site’s metadata, plugins, and other general configuration.
 *  This file should be in the root of your Gatsby site.
 */
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
