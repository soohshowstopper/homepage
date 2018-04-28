

$(document).ready(function() {  
	$('#slider').kickAssSlide({thumbs: false, bullets: true});

  // smooth page scrolling
  $('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var pos = target.offset().top - 70;
        $('html,body').animate({
          scrollTop: pos
        }, 1000);
        return false;
      } else {
        $('html,body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      }
    }
  });
  
});
