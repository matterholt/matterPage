// used to sort articles
const
    dev = (global.dev = process.env.ELEVENTY_ENV === "development");
    now = new Date()

const dateformat = require('./lib/filters/dataformat')
    

module.exports = function (config) {
    //    config.addPlugin(pluginSass, sassPluginOptions)

    config.addFilter("datefriendly",dateformat.friendly)

    config.addPlugin(require("@11ty/eleventy-navigation"));
    config.addShortcode('navlist', require('./lib/shortcode/navlist.js'))
    config.addTransform('postcss', require('./lib/transforms/postcss'))
    config.addWatchTarget('./src/scss/')

    config.addPassthroughCopy("./src/fonts");
    config.addPassthroughCopy("./src/images");


    config.addFilter("first", (value) => {
        const latestPost = value.map(x => {
            const { title, slug } = x.data
            const url = x.data.page.url
            return { title, slug, url };
        })
        return latestPost.slice(0,3);
    });


    config.addCollection("post", (collection) =>
      collection
        .getFilteredByGlob(`./src/articles/*.md`)
        .filter((p) => dev || (p.data.published && p.date <= now))
    );
    config.addCollection("latest", (collection) =>
      collection
        .getFilteredByGlob(`./src/articles/*.md`)
        .filter((p) => dev || (p.data.published && p.date <= now))
    );
    return{
        dir: {
            input: "src",
            output: "dist"
        }
    }
}

