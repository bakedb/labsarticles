module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  return {
    pathPrefix: "/labsarticles/",
    dir: {
      input: "src",
      output: "_site"
    }
  };
};