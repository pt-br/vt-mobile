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
          <div id="mo-post-count" class="mo-info-count">4</div>
        </div>
        <div class="mo-info-container">
          <div class="mo-info-icon fa fa-eye"></div>
          <div id="mo-view-count" class="mo-info-count">20</div>
        </div>
        <div class="mo-info-container">
          <div id="last-count" class="mo-info-count">Última</div>
          <div id="last-icon" class="mo-info-icon fa fa-arrow-circle-right"></div>
        </div>
      </div>
    `
  );

  const sitePost = topicBlock.find('.respostas');
  const nearPostCount = sitePost.parent().nextAll('.mo-topic-menu-container').find('#mo-post-count');
  nearPostCount.append(sitePost);

  // const sitePostText = topicMenuContainer.prevAll('div').children('.respostas').text();
  // console.log('sitePostText: ', sitePostText);
  // postCount.text(sitePostText);

  // sitePost.appendTo(sitePost.prev().next());

  const hideElements = [
    topicBlock.find('.quickPaging'),
  ];

  massiveHide(hideElements);
  
  topicBlock.addClass('mo-topic-block');
  topicTitle.addClass('mo-topic-title-container');
  authorContainer.addClass('mo-topic-author-container');
};

module.exports = home;
