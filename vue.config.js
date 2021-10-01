const path = require("path");

module.exports = {
    chainWebpack: (config) => {
        const svgRule = config.module.rule("svg");

        svgRule.uses.clear();

        svgRule
            .oneOf('inline')
            .resourceQuery(/inline/)
            .use('babel-loader')
            .loader('babel-loader')
            .end()
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
            .end()
            .end()
            .oneOf('external')
            .use('file-loader')
            .loader('file-loader')
            .options({
                name: 'assets/[name].[hash:8].[ext]',
            });
        
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