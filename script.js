$(window).on('load', function () {
  
  var addImg = (img, txt) => {
    var html = `
                <img class="img-fluid" alt="image error" src="${img}">
                <p class="mt-4 pt-3 bdt-solid">${txt}</p>
              `;
    return html;
  }

  // worksの画像をクリックすると個別のモーダルが表示されるイベント
  $('.works-images').click(function () {
    const kFnInit = $(this);
    let alt = kFnInit.attr('alt');
    let src = kFnInit.attr('src');
    let txt = kFnInit.attr('data-imgtext');
    $('.modal-body').empty();
    $('.modal-title').text(alt);
    $('.modal-body').append(addImg(src, txt));
  });

  // ナビゲーションタイトルをクリックするとスクロールするイベント(2種)
  $('.nav-item').click(function () {
    let navLink = $(this).find('a').attr('href');
    let position = $(navLink).offset().top;
    $('html,body').animate({scrollTop: position}, 400);
  });

  $('#navi-title').click(function () {
    $('html,body').animate({ scrollTop: 0}, 400);
  })

  // 最上部まできたらナビゲーションを透明にするイベント
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