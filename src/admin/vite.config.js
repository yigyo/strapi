const { mergeConfig } = require('vite');

module.exports = (config) => {
    return mergeConfig(config, {
          server: {
            allowedHosts: ['strapi-production-cd13.up.railway.app', 'all'],
              },
});
};
