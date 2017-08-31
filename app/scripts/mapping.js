const router = require('./router');

function mapping(mappingUrl) {
  const pageTypes = [];

 /* Map URLs here */
  pageTypes.push(
    {
      type: "homeVt",
      url: /\/vale-tudo/gi,
      appFile: ["./pages/home/home.js"]
    },
    {
      type: "topicPage",
      url: /_t_/gi,
      appFile: ["./pages/browse/topic.js"]
    },
  );

  /* Router will import a file according to mapping */
  router(pageTypes, mappingUrl, 'mapping');
};

module.exports = mapping;