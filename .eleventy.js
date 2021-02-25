// const pluginSass = require('"eleventy-plugin-sass"')
const
    dev = (global.dev = process.env.ELEVENTY_ENV === "development");
    now = new Date()

module.exports = function (config) {
    //    config.addPlugin(pluginSass, sassPluginOptions)
 
    config.addPlugin(require("@11ty/eleventy-navigation"));
    config.addShortcode('navlist', require('./lib/shortcode/navlist.js'))
    config.addTransform('postcss', require('./lib/transforms/postcss'))
    config.addWatchTarget('./src/scss/')


    return{
        dir: {
            input: "src",
            output: "dist"
        }
    }
}

