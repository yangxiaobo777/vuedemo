const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    alias:{
      'assets':'@/assets',
      'common':'@/common',
      'components':'@/components',
      'network':'@/network'
    }
  }

})
