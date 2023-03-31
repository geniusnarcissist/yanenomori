$(function () {
  //変数セット
  var $elem = $('.switch');
  var sp = '_sp.';
  var pc = '_pc.';
  var replaceWidth = 767; 
  
  function imageSwitch() {
  
  var windowWidth = parseInt($(window).width());
  
  $elem.each(function () {
  var $this = $(this);
  if (windowWidth >= replaceWidth) {
  $this.attr('src', $this.attr('src').replace(sp, pc));
  } else {
  $this.attr('src', $this.attr('src').replace(pc, sp));
  }
  });
  }
  imageSwitch();
  
  var delayStart;
  var delayTime = 200; //ミリSec
  $(window).on('resize', function () {
  clearTimeout(delayStart);
  delayStart = setTimeout(function () {
  imageSwitch();
  }, delayTime);
  });
});