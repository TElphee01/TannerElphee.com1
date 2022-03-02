if (window.location.pathname == "/") {
    if ($(window).width() < 960) {
      document.getElementsByClassName('section3Background')[0].style.height = "auto";
      document.getElementById('page-top').style.overflowX = "hidden";
    } else {
      document.getElementById('section6Background').style.display = "block";
      showTradingView();
    }
  }


  //Setting body background color on certian pages
  if (location.pathname =='/blog/') {
    document.getElementById('page-top').style.background ='slategray'
  }

  /* Swiper.JS initialization */
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 8,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      breakpoints: {
        960: {
          slidesPerView: 12,
          spaceBetween: 10
        },
        720: {
          slidesPerView: 8,
          spaceBetween: 8
        },
        540: {
          slidesPerView: 6,
          spaceBetween: 5
        },
        320: {
          slidesPerView: 4,
          spaceBetween: 5,
        },
      },
      autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
  });


      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top - 71)
            }, 1000, "easeInOutExpo");
            return false;
          }
        }
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

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
      });


      function showTradingView() {
          //TradingView
          new TradingView.widget({
            "width": 980,
            "height": 610,
            "symbol": "CME_MINI:ES1!",
            "interval": "D",
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "allow_symbol_change": true,
            "save_image": false,
            "studies": [
              "MACD@tv-basicstudies",
              "WilliamsAlligator@tv-basicstudies"
            ],
            "container_id": "tradingview_4cff6"
          }
        );
      }
