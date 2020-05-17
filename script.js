$(window).on('load', function () {
  // navbarのevent
  // $('.nav-item').on({
  //   'mouseenter':function() {
  //     let navLink = $(this).find('a').attr('href');
  //     let position = $(navLink).offset().top;
  //     $('body').animate({scrollTop:position}, 300)
  //   }, 
  //   'mouseleave':function() {
  //     console.log('OUT');
  //   }
  // });
  $('.nav-item').click(function () {
    let navLink = $(this).find('a').attr('href');
    let position = $(navLink).offset().top;
    $('body').animate({ 'scrollTop': position }, 300);
  });

  //ナビゲーションの位置まできたら透明にするイベント
  var nav = $('.navbar'); //表示位置
  var navTitle = $('.navbar-brand');
  var navLink = $('.nav-link');
  var navTop = nav.offset().top + 2; //ナビゲーションの高さ（高さの分だけ加算）
  var flag = false;
  $(window).scroll(function () {
    var winTop = $(this).scrollTop();
    if (winTop >= navTop) {
      if (flag == false) {
        flag = true;
        nav.removeClass('bg-clear');
        navTitle.removeClass('fc-white1');
        navLink.removeClass('fc-white2');
        nav.addClass('bg-skull');
        navTitle.addClass('fc-black1');
        navLink.addClass('fc-black2');
      }
    } else if (winTop <= navTop) {
      if (flag) {
        flag = false;
        nav.removeClass('bg-skull');
        navTitle.removeClass('fc-black1')
        navLink.removeClass('fc-black2')
        nav.addClass('bg-clear');
        navTitle.addClass('fc-white1')
        navLink.addClass('fc-white2')
      }
    }
  });
});