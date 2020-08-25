 $('.ourfriends__cards').slick({
   slidesToShow: 3,
   centerMode: true,
     centerPadding: '30px',
     arrows:false,
 })

$('.navigation__link, .header__logo').click(function () {
  var scrollName = $(this).attr('data-scroll');
  scrollElem = $(scrollName);
  scrollTop = scrollElem.offset().top;
  $('html, body').animate({
    scrollTop: scrollTop
  }, 500);
});
$(window).scroll(function () {
  var docscroll = $(document).scrollTop();
  var height = $(window).height()-1;
  if (docscroll > height) {
    $('.header').addClass('fixed');
    
  } else {
    $('.header').removeClass('fixed');
  }
});

$(function () {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.navigation-mobile');
  var width = $('.navigation-mobile').width();
  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('navigation-mobile__active');
    $('.header').removeClass('fixed');
    $('.header').removeClass('fixed');
  
    $('body').animate({ 
      right: '285px'
    }, 200);
  });
  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('navigation-mobile__active');
    $('.header').addClass('fixed');
    $('body').animate({
      right: '0px'
    }, 200);
  });
});
