
// $(function() {
//   $('h1').slideUp(1000).slideDown(1000);
//   $('#main').css({
//     color:'red',
//     fontSize:25
//
//   });
//
//   $('h1').click(function() {
//     $('.content').css({
//       color:'blue',
//       fontSize:30
//     });
//   });
// });
// $(window).on("load",function() {
//   alert("Windows is loaded");
// });


$(window).on('load',function(){
   $('#status').fadeOut();
   $('#preloader').delay(500).fadeOut();
});

$(function (){
  $("#team-members").owlCarousel({
    items:2,
    autoplay:true,
    smartSpeed:700,
    loop:true,

    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="bracket fas fa-angle-left "></i>','<i class="bracket fas fa-angle-right"></i>']

  });
});

$(function() {
  $("#progress-elements").waypoint(function() {
    $(".progress-bar").each(function() {
      $(this).animate({
        width:$(this).attr("aria-valuenow")+"%"
      },2000);
    });
    this.destroy();
  },{
    offset:'bottom-in-view'
  });


});
$(window).on('load',function (){
  $("#isotope-container").isotope({
    });

    $("#isotope-filters").on('click','button',function(){
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
          filter:filterValue
          });

          $("#isotope-filters").find('.active').removeClass('active');
          $(this).addClass('active');
    });
});

$(function (){
  $("#testimonial-slider").owlCarousel({
    items:1,
    autoplay:false,
    smartSpeed:700,
    loop:true,

    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="bracket fas fa-angle-left "></i>','<i class="bracket fas fa-angle-right"></i>']

  });
});

$(function(){
    $(".counter").counterUp({
      delay:10,
      time:2000
    });
});

$(function (){
  $("#clients-list").owlCarousel({
    items:6,
    autoplay:false,
    smartSpeed:700,
    loop:true,

    autoplayHoverPause:true,
    nav:true,
    dots:false,
    navText:['<i class="bracket fas fa-angle-left "></i>','<i class="bracket fas fa-angle-right"></i>']

  });
});


$(window).on('load',function(){
    var addressString='230 Broadway,NY,New York 10007,USA';
    var myLatlng={
      lat:40.712685,
      lng:-74.005920
    };
    var map=new google.maps.Map(document.getElementById('map'),{
      zoom:11,
      center:myLatlng
    });

    var marker=new google.maps.Marker({
      position:myLatlng,
      map:map,
      title:"Click to see Address"
    });
     var infowindow=new google.maps.InfoWindow({
       content:addressString
     });
     marker.addListener('click',function() {
       infowindow.open(map,marker);
     });
});

$(function() {
   showHideNav();
  $(window).scroll(function (){
    showHideNav();
  });
  function showHideNav(){
    if($(window).scrollTop()>50)
    {
      $("nav").addClass("white-nav-top");
      $(".navbar-brand img").attr("src","img/logo/logo-dark.png");
      $("#back-to-top").fadeIn();
    }
    else {
       $("nav").removeClass("white-nav-top");
       $(".navbar-brand img").attr("src","img/logo/logo.png");
       $("#back-to-top").fadeOut();
    }
  }
});
$(function() {
  $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        var section_id=$(this).attr("href");
        $("html,body").animate({
          scrollTop:$(section_id).offset().top-64
        },1250,"easeInOutExpo");

  });
});
/*
$(function() {
  $("#services-tab").responsiveTabs({

  });
});
*/
/*  $(".progress-bar").each(function() {
       $(this).animate({
         width:$(this).attr("aria-valuenow")+"%"
       },2000);
  }); */
/*  $(function(){
    $("#services-tab").responsiveTabs({

    });
  });
  */
