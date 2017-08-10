jQuery(document).ready(function() {
  /* Variable declarations */
  var paginationContainer = jQuery('.mo-pagination-container');
  var prevButton = paginationContainer.find('#mo-section-left');
  var nextButton = paginationContainer.find('#mo-section-right');
  var checkPrevious = document.querySelector('.sprite-no-previous');
  var checkNext = document.querySelector('.sprite-no-next');

  if (checkPrevious) {
    prevButton.addClass('inactive');
  }

  if (checkNext) {
    nextButton.addClass('inactive');
  }

  prevButton.on('click', function() {
    var originalPrev = document.querySelector('.sprite-previous:not(.sprite-no-previous)');
    if (!originalPrev) {
      return false;
    }
    var originalLink = originalPrev.parentNode;
    originalLink.click();
  });

  nextButton.on('click', function() {
    var originalNext = document.querySelector('.sprite-next:not(.sprite-no-previous)');
    if (!originalNext) {
      return false;
    }
    var originalLink = originalNext.parentNode;
    originalLink.click();
  });

});
