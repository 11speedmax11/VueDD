const path = require('path');
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pluginOptions: { // Это объект, который можно использовать для передачи произвольных параметров сторонним плагинам.
    svgSprite: {  // указываем название правила
      dir: './src/assets/icons', // папка в которой находятся иконки
      test: /\.svg$/, // название файла заканчивается на .svg
      loaderOptions: { // опции загрузки (импорта)
        extract: false, // опция позволяет указать нужно ли создавать отдельный файл или оставить в js
      },
    } 
  }, 
  chainWebpack: config => { // позволяет модифицировать внутреннюю конфигурацию webpack
    config.module // обращаемся к опции хранящей настройки для загрузки (импорта) модулей
        .rule('svg-sprite') // название правила
        .use('svg-sprite-loader') // название плагина который будет запускать загрузчики
        .loader('svg-sprite-loader'); // название загручика
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
