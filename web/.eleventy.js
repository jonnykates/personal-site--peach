const CleanCSS = require("clean-css");

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

  eleventyConfig.addFilter("monthDateFormat", (dateObj) => {
    return new Date(dateObj).toLocaleString("en-gb", {
      year: "numeric",
      month: "long",
    });
  });
};
