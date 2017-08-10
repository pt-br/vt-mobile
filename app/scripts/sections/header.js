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
    <a href="/vale-tudo_f_57" class="mo-logo-container">
      <div class="mo-logo-image sprite-vtMini"></div>
      <div class="mo-logo-text">VT Mobile</div>
    </a>
    <div class="mo-login-container">
      <a href="https://acesso.uol.com.br/login.html" class="mo-login-button fa fa-user fa-2x"></a>
    </div>
  `
  headerContainer.append(logoContainer);
}

module.exports = header;