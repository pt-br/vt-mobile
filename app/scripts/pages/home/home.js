const { massiveHide } = require('../../coreFunctions'); 

const home = {
  init: () => {
    constructor();
    setupTopicList();
  },
};

const constructor = () => {
  body.addClass('mo-home');
  homeContainer = body.find('#content');
  const actionContainer = body.find('#actionTopicsContent');
  const paginationContainer = actionContainer.find('#paginacao');

  const hideElements = [
    homeContainer.find('#goto'),
    actionContainer.find('.left'),
  ];
  
  massiveHide(hideElements);

  homeContainer.addClass('mo-home-container');
};

const setupTopicList = () => {
  const topicsContainer = homeContainer.find('#topics');
  topicsContainer.addClass('mo-topics-container');
};

module.exports = home;
