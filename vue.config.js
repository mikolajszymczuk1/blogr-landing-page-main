const path = require("path");

module.exports = {
    chainWebpack: (config) => {
        config
            .resolve
            .alias
            .set("@", path.resolve("src"));
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                    @use "~@/assets/scss/utilities/fonts";
                    @use "~@/assets/scss/utilities/colors";
                `
            }
        }
    }
}