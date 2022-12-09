// Change default input and output directories
module.exports = function (eleventyConfig) {
    // Copy the 'img' directory
    eleventyConfig.addPassthroughCopy("src/img");
    // Copy the 'js' directory
    eleventyConfig.addPassthroughCopy("src/js");
    return {
        dir: {
            input: "src",
            output: "public"
        },
    };
};