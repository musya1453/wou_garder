(function ($) {

  $(window).load(function () {
    // The slider being synced must be initialized first
    $('#carousel').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      slideshow: false,
      directionNav: false,
      itemWidth: 95,
      itemMargin: 6,
      asNavFor: '#slider'
    });

    $('#slider').flexslider({
      animation: "slide",
      controlNav: false,
      animationLoop: false,
      directionNav: false,
      slideshow: false,
      sync: "#carousel"
    });
  });

  $(window).load(function () {
    var btn = $('.btn-menu'),
      $menu = $('.nav');

    btn.on('click touch', function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $menu.hide();
      } else {
        $(this).addClass('active');
        $menu.show();
      }
    })
  });

  $(window).load(function(){
    var btn = $('.btn-smile'),
      smiles = $('.smile-container');

    btn.on('click touch', function (e) {
      e.preventDefault();

      if($(this).hasClass('active')){
        $(this).removeClass('active');
        smiles.hide();
      }else{
        $(this).addClass('active');
        smiles.show();
      }
    })
  })

})(jQuery);

