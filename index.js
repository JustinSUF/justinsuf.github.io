$(window).on('scroll', function() {
  var navbarHeight = $('.navbar').height();
  var scrollTop = $(this).scrollTop();

  if (scrollTop > navbarHeight) {
    $('.middle-text').animate({
      top: navbarHeight
    }, 'slow');
  } else {
    $('.middle-text').animate({
      top: '50%'
    }, 'slow');
  }
});
