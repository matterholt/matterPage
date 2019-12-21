const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-template-js": hot(preferDefault(require("/Users/matterholt/Documents/webpage/matterPage/src/templates/blogPostTemplate.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/matterholt/Documents/webpage/matterPage/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/matterholt/Documents/webpage/matterPage/src/pages/index.js")))
}

