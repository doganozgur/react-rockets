// cypress/plugins/index.js

module.exports = {
  ...(on, config) => {
    // setupNodeEvents veya diğer Cypress özelliklerini burada tanımlayabilirsiniz
    on("task", {
      // Task örnekleri burada tanımlanabilir
    });

    // Diğer Cypress yapılandırmaları
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
