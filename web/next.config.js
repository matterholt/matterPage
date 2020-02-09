const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});
module.exports = {
  exportTrailingSlash: true,
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/projects": { page: "/projects" },
      "/Blog": { page: "/blog" }
    };
  }
};

/*
module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
    const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
    const data = await res.json();
    const shows = data.map(entry => entry.show);

    shows.forEach(show => {
      paths[`/show/${show.id}`] = {
        page: "/show/[id]",
        query: { id: show.id }
      };
    });

    return paths;
  }
};




*/
