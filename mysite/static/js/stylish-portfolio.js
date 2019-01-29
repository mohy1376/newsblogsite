
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

$(document).ready(function() {
  
  $(".navbar-nav li").addClass("nav-item");
  $(".navbar-nav a").addClass("nav-link");
  
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


});

function toast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}


// for comment's reply
function show_reply_form(event) {
  var $this = $(this);
  var comment_id = $this.data('comment-id');

  $('#id_parent').val(comment_id);
  $('#form-comment').insertAfter($this.closest('.comment'));
};

function cancel_reply_form(event) {
  $('#id_comment').val('');
  $('#id_parent').val('');
  $('#form-comment').appendTo($('#wrap_write_comment'));
}

$.fn.ready(function() {
  $('.comment_reply_link').click(show_reply_form);
  $('#cancel_reply').click(cancel_reply_form);
})