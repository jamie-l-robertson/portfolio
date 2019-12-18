const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@stores": path.resolve(__dirname, "src/store"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@shared": path.resolve(__dirname, "src/shared"),
        "@theme": path.resolve(__dirname, "src/theme"),
        "@images": path.resolve(__dirname, "src/images"),
        "@static": path.resolve(__dirname, "src/static"),
      }
    }
  });
};
