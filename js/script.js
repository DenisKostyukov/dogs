$('.ourfriends__cards').slick({
  slidesToShow: 3,
  centerMode: true,
  centerPadding: '30px',
  responsive: [{
    breakpoint: 850,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 630,
    settings: {
      slidesToShow: 1,
      centerMode: false,
    }
  },
  {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
      arrows: false,
      centerMode: false,
    }
  },
  ]
})

$('.navigation__link, header__logo').click(function () {
  var scrollName = $(this).attr('data-scroll');
  scrollElem = $(scrollName);
  scrollTop = scrollElem.offset().top;
  $('html, body').animate({
    scrollTop: scrollTop
  }, 500);
});

$(window).scroll(function () {
  var position = $(document).scrollTop();
  var nav = $('.navigation-mobile').hasClass('active');
  var block_position = $('.about').offset().top - 2; // расположение блока, от которого и зависит фиксированность хэдера
  if (position > block_position) { // если позиция скролла страницы больше, то ставим фикс
    $('.header').addClass('fixed');
  } else {
    $('.header').removeClass('fixed');
  }
});

$(function () {
  var content = $('.content');
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.navigation-mobile');
  link.on('click', function (event) {
    event.preventDefault();
    menu.addClass('active');
    content.addClass('active');
    $('.header').removeClass('fixed');
  });
  close.on('click', function (event) {
    var position = $(document).scrollTop();
    if (position < block_position) { // если позиция скролла страницы больше, то ставим фикс
    } else {
      $('.header').addClass('fixed');
    }
    event.preventDefault();
    menu.removeClass('active');
    content.removeClass('active');
  });
});
$('.navigation__link').click(function (e) {
  e.preventDefault();
  $('.navigation-mobile').removeClass('active');
  $('.content').removeClass('active');

});