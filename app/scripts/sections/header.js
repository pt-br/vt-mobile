const { massiveHide } = require('../coreFunctions'); 

const header = {
  init: () => {
    constructor();
    setupLogo();
  },
};

const constructor = () => {
  headerContainer = body.find('#header');
  const breadcrumbContainer = body.find('.bread-container')

  const hideElements = [
    headerContainer.find('#station-logo'),
    headerContainer.find('#header-menu'),
    headerContainer.find('#header-actions-ul'),
    headerContainer.find('#header-facebook-like'),
  ];
  
  massiveHide(hideElements);

  headerContainer.addClass('mo-header-container');
  breadcrumbContainer.addClass('mo-breadcrumb-container');
}

const setupLogo = () => {
  const logoContainer = `
    <div class="mo-logo-container">
      <div class="mo-logo-image sprite-vtMini"></div>
      <div class="mo-logo-text">VT Mobile</div>
    </div>
  `
  headerContainer.append(logoContainer);
}

module.exports = header;