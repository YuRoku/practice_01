$(function() {

  var timer = false;

  $(window).resize(function() {
  if (timer !== false) {
  clearTimeout(timer);
  }

  timer = setTimeout(function() {
  //リロードする
  location.reload();
  }, 200);
  });

  // nav固定-------------------------------------------------
  var navPos = $( 'nav' ).offset().top; // グローバルメニューの位置
  var navHeight = $( 'nav' ).outerHeight(); // グローバルメニューの高さ
  const h = $('.top-img').height();

  $( window ).on( 'scroll', function() {
    if ( $( this ).scrollTop() > navPos - h * 0.666666666666) {
      $( 'body' ).css( 'padding-top', navHeight );
      $( 'nav' ).addClass( 'nav_fixed' );
    } else {
      $( 'body' ).css( 'padding-top', 0 );
      $( 'nav' ).removeClass( 'nav_fixed' );
    }
  });

  // navスクロール-------------------------------------------------
  $('.top-r').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });

  $('.food-r').click(function() {
    const target = $('.food').offset().top;
    $('html, body').animate({scrollTop: target}, 800);
  });

  $('.cat-r').click(function() {
    const target = $('.cat').offset().top;
    $('html,body').animate({scrollTop:target}, 500);
});

$('.goldfish-r').click(function() {
  const target = $('.goldfish').offset().top;
  $('html,body').animate({scrollTop:target}, 500);
});

$('.contact-r').click(function() {
  const target = $('.contact').offset().top;
  $('html,body').animate({scrollTop:target}, 500);
});


  // スクロール カラー-------------------------------------------------

  $( window ).on( 'scroll', function() {
    
    const scrollTop = $( window ).scrollTop();
    const navH = $( 'nav' ).outerHeight(); // グローバルメニューの高さ

    $('.food').each(function() {
      const posH = $('.food').offset().top;
      const posB = $('.food').outerHeight();
      if ( scrollTop > posH - navH ) {
        $( '.food-r' ).addClass( 'scroll-color' );
      } else {
        $( '.food-r' ).removeClass( 'scroll-color' );
      }
      if ( scrollTop > posH + posB - navH ) {
        $( '.food-r' ).removeClass( 'scroll-color' );
      } 
    });

    $('.cat').each(function() {
      const posH = $('.cat').offset().top;
      const posB = $('.cat').outerHeight();
      if ( scrollTop > posH - navH ) {
        $( '.cat-r' ).addClass( 'scroll-color' );
      } else {
        $( '.cat-r' ).removeClass( 'scroll-color' );
      }
      if ( scrollTop > posH + posB - navH ) {
        $( '.cat-r' ).removeClass( 'scroll-color' );
      } 
    });
    
    $('.goldfish').each(function() {
      const posH = $('.goldfish').offset().top;
      const posB = $('.goldfish').outerHeight();
      if ( scrollTop > posH - navH ) {
        $( '.goldfish-r' ).addClass( 'scroll-color' );
      } else {
        $( '.goldfish-r' ).removeClass( 'scroll-color' );
      }
      if ( scrollTop > posH + posB - navH ) {
        $( '.goldfish-r' ).removeClass( 'scroll-color' );
      } 
    });

    $('.contact').each(function() {
      const posH = $('.contact').offset().top;
        if ( scrollTop > posH - navH ) {
          $( '.contact-r' ).addClass( 'scroll-color' );
        } else {
          $( '.contact-r' ).removeClass( 'scroll-color' );
        }
    });
    
    
    
    
    
  });


  // スクロール アイコン-------------------------------------------------
  setInterval(() => {
    $("#rect").animate({
      top: "-=1rem"
    }, 600);
    $("#rect").animate({
      top: "+=1rem"
    }, 600);
  }, 600);


  // エフェクト-------------------------------------------------

  $(window).scroll(function () {

    const scroll = $(window).scrollTop();
    const windowHeight = $('.top-img').height();

    $('.effect-fade-b').each(function() {
      const elemPos = $(this).offset().top;
        if (scroll > elemPos - windowHeight + 100) {
            $(this).addClass('effect-scroll');
        }
    });


    $('.effect-fade-r').each(function() {
      const elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass('effect-scroll');
      }
    });

    $('.effect-fade-l').each(function() {
      const elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight + 100) {
          $(this).addClass('effect-scroll');
      }
    });

    $('.effect-fade-delay').each(function(i) {  
      // 時間差フェードイン
      const elemPos = $(this).offset().top;
      if (scroll > elemPos - windowHeight + 100) {
        $(this).delay(i * 300).queue(function() {
          $(this).addClass('effect-scroll').dequeue();
        });
      }
    });

  });


  // 文字エフェクト-------------------------------------------------

  $('.effect-txt').textillate({
    loop: false,
    minDisplayTime: 7000,
    initialDelay: 2000,
    autoStart: true,

    in:{
      effect: 'fadeIn',
      delayScale: 1.5,
      delay: 100,
      sync: false,
      shuffle: false
    },

    // out:{
    //   effect: 'fadeOut',
    //   delayScale: 1.5,
    //   delay: 50,
    //   sync: false,
    //   shuffle: false
    // }
  });

  $('.effect-txt.br').textillate({
    loop: false,
    minDisplayTime: 7000,
    initialDelay: 3000,
    autoStart: true,

    in:{
      effect: 'fadeIn',
      delayScale: 1.5,
      delay: 100,
      sync: false,
      shuffle: false
    },
  });

  // スライダー-------------------------------------------------
  
  $('.top-slick').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 3000,
    arrows: false,
    draggable: false,
    fade: true,
    pauseOnHover: false,
  });

  $('.food-slick').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    dots: true,
    prevArrow: '<i class="fas fa-chevron-left slide-arrow prev-arrow"></i>',
    nextArrow: '<i class="fas fa-chevron-right slide-arrow next-arrow"></i>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1,
        }
  } ]
  });



  // モーダル-------------------------------------------------
$('button').click(function() {
  $('.submit-mask').fadeIn();
  $('.submit-modal').fadeIn();
  return false;
});

$('.submit-close').click(function() {
  $('.submit-mask').fadeOut();
  $('.submit-modal').fadeOut();
  return false;
});



  // flexbox用------------------------------------------------

var $grid = $('.goldfish-contents'),
    emptyCells = [],
    i;

for (i = 0; i < $grid.find('.goldfish-box').length; i++) {
    emptyCells.push($('<div>', { class: 'goldfish-box is-empty' }));
}
$grid.append(emptyCells);











});