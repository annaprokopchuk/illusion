//=require jquery/dist/jquery.min.js
//=require imagesloaded/imagesloaded.pkgd.min.js
//=require masonry/dist/masonry.pkgd.min.js
//=require jquery-sticky/jquery.sticky.js


// masonry
jQuery(document).ready(function($) {
  var $grid = $('.grid').masonry({
      // options
      itemSelector: '.grid__card',
      columnWidth: '.persent-size',
      percentPosition: true
  });
  $grid.imagesLoaded().progress(function() {
    $grid.masonry();
  });



  // toggler menu
  function toggler() {
    $('[data-toggler]').on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      var hash = $this.attr('href') || $this.data('target');
      if (!hash)
        return false;
      $this.toggleClass('is-active');
      $(hash).toggleClass('is-show');
    })
  }

  toggler();


  $("#sticker").sticky({topSpacing:0});

});