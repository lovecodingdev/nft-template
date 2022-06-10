module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("jfif")
      .test(/\.(jfif)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader");
  },
};
