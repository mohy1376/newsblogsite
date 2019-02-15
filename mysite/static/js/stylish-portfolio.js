
(function($) {


  // "use strict"; // Start of use strict

  var width = $( window ).width();
  if(width > 768 ){
    $(".menu-toggle").css('display','none');
  }
  else{
    $(".menu-toggle").css('display','inline');
    $(".navbar").css('display','none');
  }
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    
    if ( scroll < 10 ){
      if(width > 768 ){
      $(".menu-toggle").css('display','none');
      $("#sidebar-wrapper").removeClass("active");
      $(".menu-toggle").removeClass("active");
      $(".navbar").fadeIn("slow");
      }
      else{
        $(".menu-toggle").css('display','inline');
        $(".navbar").fadeOut("fast");
      }
      

    }
    else{
      $(".menu-toggle").css('display','inline');
      $(".navbar").fadeOut("fast");
    }
    
    // Do something
});


  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {

    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
   
    $(this).toggleClass("active");



  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// start of js :
$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip(); 
  
  $(".navbar-nav li").addClass("nav-item");
  $(".navbar-nav a").addClass("nav-link");

  // var pathname = window.location.pathname; 
  // if (pathname == '/fa/accounts/login' || pathname == '/fa/accounts/signup'){
  //   $('footer').css('display','none');
  //   $('nav').css('display','none');
  //   $('*').addClass("log_every");
  //   $('html').addClass("log_html");
  //   $('body').addClass("log_body");
  //   $('input').addClass("log_input");
  // }  


  // search
  $("#searchicon").click(function(){
$(".searchjs").fadeToggle("slow");

  });
  // search side
  $("#searchsideicon").click(function(){
    $(".searchsidejs").fadeToggle("fast");

      });

//send comment message
$("#commentTarget").submit(function(event) {
  event.preventDefault();
  toast();
  setTimeout(function(){

     
      event.currentTarget.submit();
  },1500);
  
 
});
  $("#target").submit(function(event) {
    event.preventDefault();
    toast();
    setTimeout(function(){
  
       
        event.currentTarget.submit();
    },1500);
  });

  $(".button").click(function() {
    window.location = $(this)
      .find("a")
      .attr("href");
    return false;
  });
// captcha
  $('.js-captcha-refresh').click(function () {
    $.getJSON("/captcha/refresh/", function (result) {
        $('.captcha').attr('src', result['image_url']);
        $('#id_captcha_0').val(result['key'])
    });


});

// for comment's reply

$('.comment_reply_link').click(function(event){
  var $this = $(this);
  var comment_id = $this.data('comment-id');
  $('.cancel_reply').fadeIn();
  $('.cancel_block').fadeIn();
  $('#id_parent').val(comment_id);
  $('#form-comment').insertAfter($this.closest('.comment'));

});

$('.cancel_reply').click(function(){

  $('.cancel_reply').fadeOut();
  $('.cancel_block').fadeOut();
  $('#id_comment').val('');
  $('#id_parent').val('');
  $('#form-comment').appendTo($('#wrap_write_comment'));

});

}); //end of js
//toast

function toast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}


