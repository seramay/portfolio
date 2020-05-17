$(window).on('load', function() {
  // navbarのhoverイベント
  $('.nav-item').on({
    'mouseenter':function() {
      let navLink = $(this).find('a').attr('href');
      let position = $(navLink).offset().top;
      $('body').animate({scrollTop:position},300)
    }, 
    'mouseleave':function() {
    }
  });

  $('.nav-item').click(function() {
    let navLink = $(this).find('a').attr('href');
    let position = $(navLink).offset().top;
    $('body').animate({scrollTop: position}, 300);
  });
});