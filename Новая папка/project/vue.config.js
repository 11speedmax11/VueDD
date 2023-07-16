const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: {
    svgSprite: { 
      dir: './src/assets/icons',
      test: /\.svg$/, 
      loaderOptions: { 
        extract: false, 
      },
    } 
  }, 
  chainWebpack: config => { 
    config.module 
        .rule('svg-sprite') 
        .use('svg-sprite-loader') 
        .loader('svg-sprite-loader'); 
  }
})
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
}
