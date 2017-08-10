const { massiveHide } = require('../../coreFunctions');

const home = {
  init: () => {
    constructor();
    setupPagination();
    setupTopicList();
  },
};

const constructor = () => {
  body.addClass('mo-home');
  homeContainer = body.find('#content');
  actionContainer = body.find('#actionTopics:first-of-type #actionTopicsContent');

  homeContainer.find('#actionTopics:last-of-type #paginacao').remove();

  const hideElements = [
    homeContainer.find('#goto'),
    actionContainer.find('.left'),
  ];

  massiveHide(hideElements);

  homeContainer.addClass('mo-home-container');
};

const setupPagination = () => {
  const paginationContainer = actionContainer.find('#paginacao');
  const paginationCustom = `
    <div class="mo-pagination-container">
      <a id="mo-section-left" class="mo-pagination-section">
        <div class="mo-pagination-icon fa fa-chevron-left fa-2x"></div>
        <div id="prev" class="mo-pagination-button">Anterior</div>
      </a>
      <a id="mo-section-middle" class="mo-pagination-section">
        <div>Página</div>
      </a>
      <a id="mo-section-right" class="mo-pagination-section">
        <div id="next" class="mo-pagination-button">Próxima</div>
        <div class="mo-pagination-icon fa fa-chevron-right fa-2x"></div>
      </a>
    </div>
  `;
  paginationContainer.before(paginationCustom);
  paginationContainer.addClass('mo-hide');

  const activePageContainer = actionContainer.find('#mo-section-middle');
  const activePage = actionContainer.find('.actualPage');
  activePageContainer.append(activePage);
};

const setupTopicList = () => {
  const topicsContainer = homeContainer.find('#topics');
  topicsContainer.addClass('mo-topics-container');
};

module.exports = home;
