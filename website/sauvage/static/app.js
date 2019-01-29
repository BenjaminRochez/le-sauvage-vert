$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
      {
          loop: true,
          nav: true,
          
          responsive:{
              0 : {
                  items: 1
              },
              1080 :{
                  items: 2
              }
          }
      }
  );

  Pace.on("done", function(){
        setTimeout(function () {
            $('.body').addClass('pace-delay');
        }, 200);
        setTimeout(function(){
                $('.landing__vignette').addClass('is-shown');
                
        }, 300);
    });



    $('.toggler').on('click', function(e){
        e.preventDefault(); 
        $('.nav').toggleClass('is-shown');
    });
    // SCROLLSPY
    var sections = [];
    var id = false;
    var color = false;
    var $navbar = $('.nav__links');
    var $navbara = $('a', $navbar);
    var currColor  = false;
    var scrolled_id = false;
    $navbara.click(function(e){
        e.preventDefault();
        $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
        });
        $('.nav').removeClass('is-shown')
    });

    $navbara.each(function(){
        sections.push($($(this).attr('href')));
    });

    $(window).scroll(function(e){
        var scrollTop = $(this).scrollTop() + ($(window).height() / 2)
        for(var i in sections){
        var section = sections[i];
        //console.log(color);
        if (scrollTop > section.offset().top) {
            scrolled_id = section.attr('id');
            color = section.attr('data-color');
        }
        }
        if (scrolled_id !== id) {
            $('#'+id).removeClass('current');
            id = scrolled_id;
            $navbara.removeClass('current');
            $('#'+id).addClass('current');
            
            $('a[href="#' + id + '"]', $navbar).addClass('current');
        }

        if(color !==  currColor){
            currColor = color;
            $('#background-after').attr('class', color);
        }
    });


});