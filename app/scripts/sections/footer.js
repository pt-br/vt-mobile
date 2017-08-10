const { massiveHide } = require('../coreFunctions'); 

const footer = {
  init: () => {
    constructor();
  },
};

const constructor = () => {
  // footerContainer = body.find('#footer');
  const tempFooter = body.find('#footer');
  const newFooterContent = `
    <div class="mo-footer-container">
      <a href="/new_topic.jbb?forum.id=57" class="fa fa-plus-square fa-2x mo-footer-button"></a>
      <a onclick="alert('Meus Tópicos - Em Breve')" class="fa fa-comments fa-2x mo-footer-button"></a>
      <a onclick="alert('MPs - Em Breve')" class="fa fa-envelope fa-2x mo-footer-button"></a>
      <a onclick="alert('Tópicos Favoritos - Em Breve')" class="fa fa-heart fa-2x mo-footer-button"></a>
    </div>
  `;
  tempFooter.after(newFooterContent);
  footerContainer = body.find('.mo-footer-container');

  const hideElements = [
    body.find('#importTab1'),
    body.find('#estatisticas'),
    body.find('#legendas'),
    body.find('#footer'),
    tempFooter,
  ];
  
  massiveHide(hideElements);

  footerContainer.addClass('mo-footer-container');
}

module.exports = footer;