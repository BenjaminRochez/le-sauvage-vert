$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
      {
          loop: true,
          nav: true,
          items: 2
      }
  );

  Pace.on("done", function(){
        setTimeout(function () {
            $('.body').addClass('pace-delay');
            console.log("done");
        }, 200);
    });

  $('.scrollTo').click(function(){
        //$('.nav__links').removeClass('is-open');

        var the_id = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });

});