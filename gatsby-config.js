const siteMetaData = {
    title: 'Full Stack Matt',
    description: 'Blog to record things I know',
  };


module.exports = {
    siteMetadata : siteMetaData,
    plugins: [
        'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-mdx',
      option: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
