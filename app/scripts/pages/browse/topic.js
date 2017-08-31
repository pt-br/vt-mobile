const { massiveHide, tableDump } = require('../../coreFunctions');
const { setupPagination } = require('../../customFunctions');

const topic = {
  init: () => {
    constructor();
    setupPagination();
  },
};

const constructor = () => {
  body.addClass('mo-topic');
  topicContainer = body.find('#content');
  actionContainer = body.find('#actionTopics:first-of-type #actionTopicsContent');

  topicContainer.find('#actionTopics:last-of-type #paginacao').remove();

  const hideElements = [
    topicContainer.find('#goto'),
    actionContainer.find('.left'),
    topicContainer.find('#actionTopics:last-of-type #actionTopicsContent'),
    topicContainer.find('#social-div'),
  ];

  massiveHide(hideElements);

  topicContainer.addClass('mo-topic-container');
};

module.exports = topic;
