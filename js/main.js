(function ($) { 
    "use strict";

    var  mainStatus  = $('#status'),
     mainBody = $('body'),
     mainPreloader  = $('#preloader');

     window.onload = function() {
      mainStatus.fadeOut();
      mainPreloader.delay(500).fadeOut('slow');
      mainBody.delay(500).css({
          'overflow': 'visible'
      });
     }

     //slider
    $(document).ready(function(){   
        $('.owl').owlCarousel({
             animateOut: 'fadeOut',
             items:1,
             loop:true,
             dots:true,
             nav:true,
            smartSpeed:500,
            autoplay:true,
           
        });
        $( ".owl-prev").html('<span class="fa fa-angle-left"></span>');
    $( ".owl-next").html('<span class="fa fa-angle-right"></span>');
    
    })

    //sticky nav bar
$(document).ready(function () {
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });
  });
  
   //scroll
   $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 20;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  })
//services tabs
$(document).ready(function(){

    $(".tb_1").addClass('active');

$(".tb_1").click(function(){

    $(".text_1").css('display','block');
    $(".text_2").css('display','none');
    $(".text_3").css('display','none');
    $(".text_4").css('display','none');
    $(".text_5").css('display','none');
    $(".text_6").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_6").removeClass('active');
    $(".tb_7").removeClass('active');
});
$(".tb_2").click(function(){
    $(".text_2").css('display','block');
    $(".text_1").css('display','none');
    $(".text_3").css('display','none');
    $(".text_4").css('display','none');
    $(".text_5").css('display','none');
    $(".text_6").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_6").removeClass('active');
    $(".tb_7").removeClass('active');
});

$(".tb_3").click(function(){
    $(".text_3").css('display','block');
    $(".text_1").css('display','none');
    $(".text_2").css('display','none');
    $(".text_4").css('display','none');
    $(".text_5").css('display','none');
    $(".text_6").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_6").removeClass('active');
    $(".tb_7").removeClass('active');
});
$(".tb_4").click(function(){
    $(".text_4").css('display','block');
    $(".text_1").css('display','none');
    $(".text_2").css('display','none');
    $(".text_3").css('display','none');
    $(".text_5").css('display','none');
    $(".text_6").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_6").removeClass('active');
    $(".tb_7").removeClass('active');
});
$(".tb_5").click(function(){
    $(".text_5").css('display','block');
    $(".text_1").css('display','none');
    $(".text_2").css('display','none');
    $(".text_3").css('display','none');
    $(".text_4").css('display','none');
    $(".text_6").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_6").removeClass('active');
    $(".tb_7").removeClass('active');
});
$(".tb_6").click(function(){
    $(".text_6").css('display','block');
    $(".text_1").css('display','none');
    $(".text_2").css('display','none');
    $(".text_3").css('display','none');
    $(".text_4").css('display','none');
    $(".text_5").css('display','none');
    $(".text_7").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_7").removeClass('active');
});
$(".tb_7").click(function(){
    $(".text_7").css('display','block');
    $(".text_1").css('display','none');
    $(".text_2").css('display','none');
    $(".text_3").css('display','none');
    $(".text_4").css('display','none');
    $(".text_5").css('display','none');
    $(".text_6").css('display','none');
    $(this).addClass('active');
    $(".tb_1").removeClass('active');
    $(".tb_2").removeClass('active');
    $(".tb_3").removeClass('active');
    $(".tb_4").removeClass('active');
    $(".tb_5").removeClass('active');
    $(".tb_6").removeClass('active');
});
});

//mixitup
$('#portfolio').mixItUp();
$(".po_1").click(function(){

    $(this).addClass("active");
    $(".po_2").removeClass("active");
    $(".po_3").removeClass("active");
    $(".po_4").removeClass("active");
  });
  
  $(".po_2").click(function(){
    $(this).addClass("active");
    $(".po_1").removeClass("active");
    $(".po_3").removeClass("active");
    $(".po_4").removeClass("active");
  });
  
  $(".po_3").click(function(){
  
    $(this).addClass("active");
    $(".po_1").removeClass("active");
    $(".po_2").removeClass("active");
    $(".po_4").removeClass("active");
  });
  
  $(".po_4").click(function(){
  
    $(this).addClass("active");
    $(".po_1").removeClass("active");
    $(".po_2").removeClass("active");
    $(".po_3").removeClass("active");  
  });
  
  //active footer
  $(document).ready(function(){

    $(".l_1").addClass('active');

$(".l_1").click(function(){
    $(this).addClass('active');
    $(".l_2").removeClass('active');
    $(".l_3").removeClass('active');
    $(".l_4").removeClass('active');
    $(".l_5").removeClass('active');
    $(".l_6").removeClass('active');
});
$(".l_2").click(function(){
    $(this).addClass('active');
    $(".l_1").removeClass('active');
    $(".l_3").removeClass('active');
    $(".l_4").removeClass('active');
    $(".l_5").removeClass('active');
    $(".l_6").removeClass('active');
});
$(".l_3").click(function(){
    $(this).addClass('active');
    $(".l_1").removeClass('active');
    $(".l_2").removeClass('active');
    $(".l_4").removeClass('active');
    $(".l_5").removeClass('active');
    $(".l_6").removeClass('active');
});
$(".l_4").click(function(){
    $(this).addClass('active');
    $(".l_1").removeClass('active');
    $(".l_2").removeClass('active');
    $(".l_3").removeClass('active');
    $(".l_5").removeClass('active');
    $(".l_6").removeClass('active');
});
$(".l_5").click(function(){
    $(this).addClass('active');
    $(".l_1").removeClass('active');
    $(".l_2").removeClass('active');
    $(".l_3").removeClass('active');
    $(".l_4").removeClass('active');
    $(".l_6").removeClass('active');
});
$(".l_6").click(function(){
    $(this).addClass('active');
    $(".l_1").removeClass('active');
    $(".l_2").removeClass('active');
    $(".l_3").removeClass('active');
    $(".l_4").removeClass('active');
    $(".l_5").removeClass('active');
});
})

//scroll to top
$(window).scroll(function(){
   if($(this).scrollTop() > 300) {
      $(".auto-scroll-to-top").addClass("visible");                    
    } else {
        $(".auto-scroll-to-top").removeClass("visible");
    }        
   });
    
  $(".auto-scroll-to-top").click(function(){
    $("html, body").animate({scrollTop: 0}, 1000);
  });

  
  //side nav bar
  $(document).ready(function(){
    $(".nav-toggle").click(function(){
      $(".mysidenav").toggleClass("active");

    });
  });
    $(document).ready(function(){

      $(".mysidenav").click(function(){
      $(this).toggleClass("active");
        $(".nav-toggle").removeClass("expanded");
      });
     
  });
//bar 
  $(document).ready(function(){
    
    $(".bars").click(function(){
    $(".dropdown").toggleClass('active');

  });
 
  
});
//bar content
$(document).ready(function(){
    
    $(".ite_1").click(function(){
    $(".messenger_content").css('display','none');
    $(".message_footer").css('display','none');
    $(".messenger").toggleClass('change_height1');
    $(".messenger").removeClass('change_height2');
     $(".change_name").css('display','block');
     $(".change_email").css('display','none');
     $(".dropdown").toggleClass('active');
    });
    $(".ite_2").click(function(){
        $(".messenger_content").css('display','none');
        $(".message_footer").css('display','none');
        $(".messenger").removeClass('change_height1');
        $(".messenger").toggleClass('change_height2');
         $(".change_name").css('display','none');
         $(".change_email").css('display','block');
         $(".dropdown").toggleClass('active');
        });
         $(".ite_3").click(function(){
        $(this).toggleClass('active');

        });   
        $(".ite_6").click(function(){
            $(".messenger").toggleClass('active');
            $(".dropdown").toggleClass('active');
            $(".ico_img1").toggleClass('active');
            $(".ico_img2").toggleClass('active'); 
        
            });    
       
  $(".closed").click(function(){
    $(".messenger_content").css('display','block');
    $(".message_footer").css('display','block');
    $(".messenger").css('height','initial');
    $(".change_name").css('display','none');
     $(".change_email").css('display','none');
     $(".dropdown").removeClass('active');
    
  });


});

  //messenger
  $(document).ready(function(){
      
    $(".l_1").click(function(){
    $(".messenger").toggleClass('active');
    $(".ico_img1").toggleClass('active');
    $(".ico_img2").toggleClass('active');
    $(".dropdown").removeClass('active');
    $(".messenger_content").css('display','block');
    $(".message_footer").css('display','block');
    $(".change_name").css('display','none');
     $(".change_email").css('display','none');
     $(".messenger").removeClass('change_height1');
     $(".messenger").removeClass('change_height2');
    
    

});
});

})(jQuery);

