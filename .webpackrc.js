export default {
  "extraBabelPlugins": [
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
  ],
  "html": {
    "template": "./src/index.ejs",
    "inject": true
  },
  "hash": true
}
