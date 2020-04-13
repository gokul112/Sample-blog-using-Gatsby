const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-list-template-js": hot(preferDefault(require("/Users/graj/Sample-blog-using-Gatsby/src/templates/blog-list-template.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/graj/Sample-blog-using-Gatsby/src/templates/tags.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/graj/Sample-blog-using-Gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/graj/Sample-blog-using-Gatsby/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/Users/graj/Sample-blog-using-Gatsby/src/pages/page-2.js")))
}

