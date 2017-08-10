const { massiveHide } = require('../../coreFunctions'); 

const home = {
  init: () => {
    constructor();
  },
};

const constructor = () => {
  body.addClass('mo-home');
  homeContainer = body.find('#content');

  const hideElements = [
    homeContainer.find('#goto'),
  ];
  
  massiveHide(hideElements);

  homeContainer.addClass('mo-home-container');
};

module.exports = home;
