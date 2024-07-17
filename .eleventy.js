module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/admin");


  eleventyConfig.addNunjucksFilter("limit", (arr, limit) => {
    // console.log(arr)
    return arr?.slice(0, limit);
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

