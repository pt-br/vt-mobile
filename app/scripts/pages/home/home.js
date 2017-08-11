const { massiveHide, tableDump } = require('../../coreFunctions');

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
    homeContainer.find('#actionTopics:last-of-type #actionTopicsContent'),
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
  homeContainer.find('#topics thead').remove();

  tableDump('#topics', 'mo-topics-container');
  const topicsContainer = homeContainer.find('#mo-topics-container');
  const topicBlock = topicsContainer.children('div');
  const topicTitle = topicBlock.find('.center + div');
  const authorContainer = topicTitle.next('div');
  const authorTitle = authorContainer.find('.autor');

  topicTitle.prepend(
    `
      <div class="mo-topic-image fa fa-file fa-2x"></div>
    `
  );

  authorTitle.prepend(
    `
      Postado por
    `
  );
  authorTitle.find('a').attr('href', '').attr('onclick', 'event.preventDefault()');

  topicBlock.append(
    `
      <div class="mo-topic-menu-container">
        <div class="mo-info-container">
          <div class="mo-info-icon fa fa-comment"></div>
          <div id="mo-post-count" class="mo-info-count"></div>
        </div>
        <div class="mo-info-container">
          <div class="mo-info-icon fa fa-eye"></div>
          <div id="mo-view-count" class="mo-info-count"></div>
        </div>
        <div id="mo-last-container"></div>
      </div>
    `
  );

  const topicMenuContainer = topicBlock.find('.mo-topic-menu-container');
  const sitePost = topicBlock.find('.respostas');
  const siteCount = topicBlock.find('.exibicoes');
  const siteLastLink = topicBlock.find('.lastmessage > a:first-of-type');

  console.log(siteLastLink);

  topicMenuContainer.map((index, topic) => {
    const postCount = $(topic).find('#mo-post-count');
    const viewCount = $(topic).find('#mo-view-count');
    const lastContainer = $(topic).find('#mo-last-container');
    postCount.append($(sitePost)[index]);
    viewCount.append($(siteCount)[index]);
    lastContainer.append($(siteLastLink)[index]);
    lastContainer.find('a').addClass('mo-info-container').append(
      `
        <div class="mo-info-count">Última</div>
        <div id="mo-last-icon" class="mo-info-icon fa fa-arrow-circle-right"></div>
      `
    );
  });

  const hideElements = [
    topicBlock.find('.quickPaging'),
    topicBlock.find('.lastmessage'),
  ];

  massiveHide(hideElements);

  topicBlock.addClass('mo-topic-block');
  topicTitle.addClass('mo-topic-title-container');
  authorContainer.addClass('mo-topic-author-container');
};

module.exports = home;
