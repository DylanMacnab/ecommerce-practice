
$('.main-nav__list').on('click', 'a', function(){
  $('.nav2').toggleClass('open');
});

$('.nav2-close').on('click', function(){
  $('.nav2').removeClass('open');
});
