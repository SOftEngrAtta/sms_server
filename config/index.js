module.exports = {
  port: process.env.PORT || "8080",
  mongodbURI: process.env.MONGODB_URI || "mongodb://localhost:27017/matterz-dev",
  appDomain: process.env.APP_DOMAIN || 'http://localhost:8080',
};
