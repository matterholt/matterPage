const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = {
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  }
};

/*
module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
      '/about': { page: '/about' }
      // etc...
    }
  }
}
*/