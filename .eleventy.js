// used to sort articles
const
    dev = (global.dev = process.env.ELEVENTY_ENV === "development");
    now = new Date()

module.exports = function (config) {
    //    config.addPlugin(pluginSass, sassPluginOptions)

    config.addPlugin(require("@11ty/eleventy-navigation"));
    config.addShortcode('navlist', require('./lib/shortcode/navlist.js'))
    config.addTransform('postcss', require('./lib/transforms/postcss'))
    config.addWatchTarget('./src/scss/')

    config.addPassthroughCopy("./src/fonts");

    config.addCollection("post", (collection) =>
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

