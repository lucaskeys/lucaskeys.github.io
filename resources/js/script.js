$(function() {

  // Sticky navigation
  $('.js-section-features').waypoint(function(direction) {
    if(direction == "down") {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px'
  });

  // Scroll on buttons
  $('.scroll-to-learn').click(function() {
    $('html, body').animate({scrollTop: $('.section-sign').offset().top}, 1000)
  });
  $('.scroll-to-sign').click(function() {
    $('html, body').animate({scrollTop: $('.js-section-features').offset().top}, 1000)
  });

// Nav Scroll
  // $(function() {
  //   $('a[href*=#]:not([href=#])').click(function() {
  //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
  //     || location.hostname == this.hostname) {
  //
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  //       if (target.length) {
  //         $('html,body').animate({
  //           scrollTop: offset().top
  //           }, 1000);
  //           return false;
  //           }
  //         }
  //     });
  //   });

  // Animations on scroll
  $('.js-wp-1').waypoint(function(direction) {
    $('.js-wp-1').addClass('animated fadeIn');
  }, {
    offset: "70%"
  });
  $('.js-wp-2').waypoint(function(direction) {
    $('.js-wp-2').addClass('animated fadeInUp');
  }, {
    offset: "60%"
  });
  $('.js-wp-3').waypoint(function(direction) {
    $('.js-wp-3').addClass('animated fadeIn');
  }, {
    offset: "70%"
  });

  // mobile nav

  $('.js-nav-icon').click(function() {
    var nav = $('.js-main-nav');
    var icon = $('.js-nav-icon i');
    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon');
    }

  });

});
