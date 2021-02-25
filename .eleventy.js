// const pluginSass = require('"eleventy-plugin-sass"')


module.exports = function (config) {
    //    config.addPlugin(pluginSass, sassPluginOptions)
 
    config.addPlugin(require("@11ty/eleventy-navigation"));
    config.addShortcode('navlist', require('./lib/shortcode/navlist.js'))


    return{
        dir: {
            input: "src",
            output: "dist"
        }
    }
}

