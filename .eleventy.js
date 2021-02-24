// const pluginSass = require('"eleventy-plugin-sass"')


module.exports = function (eleventyConfig) {
    //    eleventyConfig.addPlugin(pluginSass, sassPluginOptions)
    return{
    dir: {
        input: "src",
        output: "dist"
    }}
}

