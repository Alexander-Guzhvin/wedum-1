window.isBot = /bot|googlebot|crawler|spider|robot|crawling|chrome-lighthouse|Lighthouse|Speed Insights|Pingdom/i.test(window.navigator.userAgent);
window.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (window.isBot) {
  document.querySelector("body").classList.add('no-animate');
};

(function(fn) {
  if (window.isBot) return false;
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }

})(initRevolifeTheme);

function initRevolifeTheme() {
  if (!window.isBot) {
    // bot
  }
  calculate1vh();
  window.addEventListener('resize', calculate1vh);
  initToggler(jQuery);
  if(typeof(Swiper) != 'undefined'){
    homePromoSlider(jQuery);
    popularProductsSlider(jQuery);
    homeAuthorsSlider(jQuery);
    recommendProductsSlider(jQuery);
    recommendProductsTagsSlider(jQuery);
    schoolGallary(jQuery);
  }
  headerBaner(jQuery);
  mobMenu(jQuery);
  rating(jQuery);
  expendComment(jQuery);
  dragscrollInit(jQuery);
  articeBars(jQuery);
  anchorInit(jQuery);
  expendCourseContent(jQuery);
  courseContentAccordion(jQuery);
  courseShare(jQuery);
  courseConsist(jQuery);
  courseBars(jQuery);
  fancyboxInit(jQuery);
  mobMenuSubmenuToogle(jQuery);
  headerFix(jQuery);
  copyShareUrl(jQuery);
  videoPlayer(jQuery);
  stickySidebar(jQuery);
  //mobBar(jQuery);
  usefulMaterialsMoreBtn(jQuery);
  // schoolTab(jQuery);
  schoolBars(jQuery);
  subscribeToggle(jQuery);
  selectizeInit(jQuery);
  infoPageNav(jQuery);
  accordeonHendlers(jQuery);
  faq(jQuery);
  fileInput(jQuery);
  supportFormCallback(jQuery);
}

function calculate1vh() {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}

function pageDisableScroll() {
  var html = $("html"),
      scrollbar = window.innerWidth - document.body.clientWidth;
  scrollbar && html.css('paddingRight', scrollbar + "px");
  html.css("overflow", "hidden")
}

function pageEnableScroll() {
  var html = $("html");
  html.css({ "overflow": "visible", paddingRight: 0 });
}

function initToggler($) {
  $('body').on('click', '.toggle-handler', function(e) {
    var $this = $(this),
        target = $this.attr('data-toggle-target') || ($this.is('a') && $this.attr('href').length > 1 ? $this.attr('href') : '') || '',
        _class = $this.attr('data-toggle-class') || 'active',
        $target = target.length ? $(target) : [];
    if (!!$target.length) {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();
      e.returnValue = false;
      $target.toggleClass(_class).trigger('toggle_class', [_class]);
      return false;
    }
  });
}

function closeOnOutsideClick(button, target, removeClass) {
  let $button = $(button),
      $target = $(target);
  $(document).mouseup(function(e) {
    if (!$button.is(e.target)) {
      $target.removeClass(removeClass);
    }
  });
}


function homePromoSlider($) {
  var homePromoSwiper = new Swiper('.home_promo__slider-js', {
    slidesPerView: 1,
    slideClass: 'home_promo__slide',
    wrapperClass: 'home_promo__slider-list',
    speed: 500,
    loop: true,
    effect: 'fade',
    disableOnInteraction: false,
    pagination: {
      el: '.home_promo__slider-dots',
      type: 'bullets',
      clickable: true
    },
    autoplay: {
      delay: 5000,
    },
  });
}

function popularProductsSlider($) {
  var popularProductsSwiper = new Swiper('.popular_products__slider', {
    slidesPerView: 4,
    slideClass: 'popular_products__slide',
    wrapperClass: 'popular_products__slider-list',
    speed: 400,
    loop: true,
    navigation: {
      prevEl: '.popular_products__slider-prev',
      nextEl: '.popular_products__slider-next',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: {
          el: '.popular_products__slider-dots',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        slidesPerView: 3,
        pagination: false
      },
      992: {
        slidesPerView: 2,
        pagination: false
      },
      1280: {
        slidesPerView: 4,
        pagination: false
      }
    }
  });


  function addActiveClassLast() {
    let visibleSlidesCnt = popularProductsSwiper.params.slidesPerView;
    $('.popular_products__slider .popular_products__slide').removeClass('last');
    let firstItm = $('.popular_products__slider .popular_products__slide[data-swiper-slide-index="' + popularProductsSwiper.realIndex + '"]');
    firstItm.each(function(index, el) {
      $(el).nextAll().slice(visibleSlidesCnt - 2, visibleSlidesCnt - 1).addClass('last');
    });
  }
  addActiveClassLast();
  popularProductsSwiper.on('transitionStart', addActiveClassLast);
}

function homeAuthorsSlider($) {
  var homeAuthorsSwiper = new Swiper('.home_authors__slider', {
    slidesPerView: 5,
    slideClass: 'home_authors__slide',
    wrapperClass: 'home_authors__slider-list',
    speed: 400,
    loop: true,
    navigation: {
      prevEl: '.home_authors__slider-prev',
      nextEl: '.home_authors__slider-next',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: {
          el: '.home_authors__slider-dots',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        slidesPerView: 3,
        pagination: false
      },
      992: {
        slidesPerView: 4,
        pagination: false
      },
      1280: {
        slidesPerView: 5,
        pagination: false
      }
    }
  });
}

function recommendProductsSlider($) {
  var recommendProductsSwiper = new Swiper('.recommend_products__slider-5_slides', {
    slidesPerView: 5,
    slideClass: 'recommend_products__slide',
    wrapperClass: 'recommend_products__slider-list',
    speed: 400,
    loop: true,
    navigation: {
      prevEl: '.recommend_products__slider-prev',
      nextEl: '.recommend_products__slider-next',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: {
          el: '.recommend_products__slider-dots',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        slidesPerView: 3,
        pagination: false
      },
      992: {
        slidesPerView: 4,
        pagination: false
      },
      1280: {
        slidesPerView: 5,
        pagination: false
      }
    }
  });

  function addActiveClassLast(slider) {
    let visibleSlidesCnt = slider.params.slidesPerView;
    $(slider.el).find('.recommend_products__slide').removeClass('last');
    let firstItm = $(slider.el).find('.recommend_products__slide[data-swiper-slide-index="' + slider.realIndex + '"]');
    firstItm.each(function(index, el) {
      $(el).nextAll().slice(visibleSlidesCnt - 2, visibleSlidesCnt - 1).addClass('last');
    });
  }

  if (recommendProductsSwiper.length) {
    for (var i = 0; i < recommendProductsSwiper.length; i++) {
      addActiveClassLast(recommendProductsSwiper[i]);
      recommendProductsSwiper[i].on('transitionStart', (slider) => {
        addActiveClassLast(slider)
      });
    }
  } else {
    addActiveClassLast(recommendProductsSwiper);
    recommendProductsSwiper.on('transitionStart', (slider) => {
      addActiveClassLast(slider)
    });
  }

  var recommendProductsSwiperAutoWidth = new Swiper('.recommend_products__slider-auto_slides', {
    slidesPerView: 4,
    slideClass: 'recommend_products__slide',
    wrapperClass: 'recommend_products__slider-list',
    speed: 400,
    loop: true,
    navigation: {
      prevEl: '.recommend_products__slider-prev',
      nextEl: '.recommend_products__slider-next',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: {
          el: '.recommend_products__slider-dots',
          type: 'bullets',
          clickable: true
        },
      },
      768: {
        slidesPerView: 2,
        pagination: false
      },
      992: {
        slidesPerView: 3,
        pagination: false
      },
      1280: {
        slidesPerView: 4,
        pagination: false
      }
    }
  });

  if (recommendProductsSwiperAutoWidth.length) {
    for (var i = 0; i < recommendProductsSwiperAutoWidth.length; i++) {
      addActiveClassLast(recommendProductsSwiperAutoWidth[i]);
      recommendProductsSwiperAutoWidth[i].on('transitionStart', (slider) => {
        addActiveClassLast(slider);
      });
    }
  } else {
    addActiveClassLast(recommendProductsSwiperAutoWidth);
    recommendProductsSwiperAutoWidth.on('transitionStart', (slider) => { addActiveClassLast(slider) });
  }

  $('.recommend_products__slider-3_slides').each(function(index, el) {
    let prevBtn = $(el).closest('.recommend_products').find('.recommend_products__slider-prev')[0],
        nextBtn = $(el).closest('.recommend_products').find('.recommend_products__slider-next')[0],
        dots = $(el).closest('.recommend_products').find('.recommend_products__slider-dots')[0];
    var recommendProductsSwiper3Slides = new Swiper(el, {
      slidesPerView: 3,
      slideClass: 'recommend_products__slide',
      wrapperClass: 'recommend_products__slider-list',
      speed: 400,
      loop: true,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          pagination: {
            el: dots,
            type: 'bullets',
            clickable: true
          },
        },
        768: {
          slidesPerView: 3,
          pagination: false
        },
        1280: {
          slidesPerView: 3,
          pagination: false
        }
      }
    });


    if (recommendProductsSwiper3Slides.length) {
      for (var i = 0; i < recommendProductsSwiper3Slides.length; i++) {
        addActiveClassLast(recommendProductsSwiper3Slides[i]);
        recommendProductsSwiper3Slides[i].on('transitionStart', (slider) => {
          addActiveClassLast(slider);
        });
      }
    } else {
      addActiveClassLast(recommendProductsSwiper3Slides);
      recommendProductsSwiper3Slides.on('transitionStart', (slider) => { addActiveClassLast(slider) });
    }
  });
}

function recommendProductsTagsSlider($) {
  $('.recommend_products__tags-slider').each(function(index, el) {
    let prevBtn = $(el).closest('.recommend_products').find('.recommend_products__tags-prev')[0],
        nextBtn = $(el).closest('.recommend_products').find('.recommend_products__tags-next')[0];
    var recommendProductsTagsSwiper = new Swiper(el, {
      slidesPerView: 'auto',
      slideClass: 'recommend_products__tags-slide',
      wrapperClass: 'recommend_products__tags-list',
      speed: 400,
      loop: true,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });
  });
}

function headerBaner($) {
  $('.header_baner__close_btn').on('click', function(event) {
    event.preventDefault();
    $(this).closest('.header_baner').hide();
  });
}

function mobMenu($) {
  $('.mob_menu').on('toggle_class', function(e, _class) {
    this == e.target && $(e.target).hasClass('active') ? pageDisableScroll() : pageEnableScroll();
  });
}

function rating($) {
  $('.comments__form-rating__stars i').on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings('i').removeClass('active');
    $(this).siblings('.comments__form-rating__val').val(5 - $(this).index());
  });
}

function expendComment($) {
  $('.comment__reply .comment').each(function(index, el) {
    if ($(el).find('.comment__text').outerHeight() > 100) {
      $(this).closest('.comment').addClass('comment-has_expended');
      $(el).append('<a href="#" class="comment__read_more">Развернуть</a>');
    }
  });

  $(document).on('click', '.comment__read_more', function(event) {
    event.preventDefault();
    $(this).closest('.comment').removeClass('comment-has_expended');
    $(this).remove();
  });

  $('.comments__toggle_form-btn').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.comments__form').slideDown();
    $(this).hide();
  });
}

function dragscrollInit($) {
  if (!window.isMobile) {
    $('.dragscroll-js').addClass('dragscroll');
  }
}

function articeBars($){
  if (window.pageYOffset >= 100) { $(".article__top_bar, .article__bot_bar").addClass('active') }
  $(window).scroll(function() {
    var e = $(".article__top_bar, .article__bot_bar");
    window.pageYOffset >= 100 ? e.addClass('active') : e.removeClass('active');
  });
}

function courseBars($){
  if (window.pageYOffset >= 100) { $(".course__mob_nav, .course__bot_bar").addClass('active') }
  $(window).scroll(function() {
    var e = $(".course__mob_nav, .course__bot_bar");
    window.pageYOffset >= 100 ? e.addClass('active') : e.removeClass('active');
  });
}

function schoolBars($){
  if (window.pageYOffset >= 100) { $(".school__top_bar").addClass('active') }
  $(window).scroll(function() {
    var e = $(".school__top_bar");
    window.pageYOffset >= 100 ? e.addClass('active') : e.removeClass('active');
  });
}



function anchorInit($){
  if(typeof(anchor) != 'undefined'){
    $('.article__contents ol a, .article__rating-total').anchor({
      transitionDuration: 800,
      customOffset: 120,
    });

    $('.course__mob_nav a').anchor({
      transitionDuration: 800,
      customOffset: 60,
    });
    $('.anchor').anchor({
      transitionDuration: 800,
      customOffset: 120,
    });
  }

}

function expendCourseContent($){
  $('.course_content__accordion-body[data-height]').each(function(index, el) {
    if ($(el).outerHeight() > $(el).data('height')) {
      $(el).addClass('has_expended');
      $(el).css('height', $(el).data('height') + 'px')
      $(el).append('<a href="#" class="read_more" data-text="Свернуть">Развернуть</a>');
    }
  });

  $(document).on('click', '.course_content__accordion-body .read_more', function(event) {
    event.preventDefault();
    $(this).closest('div').toggleClass('has_expended');
    $(this).toggleClass('active');
  });

  $('.course__expert .richtext').each(function(index, el) {
    if ($(el).outerHeight() > 220) {
      $(this).addClass('has_expended');
      $(el).append('<a href="#" class="read_more" data-text="Свернуть">Развернуть</a>');
    }
  });



}

function courseContentAccordion($){
  $('.course_content__accordion-header').on('click', function(event) {
    event.preventDefault();
    let $parent = $(this).closest('.course_content__accordion-itm');
    $parent.toggleClass('open');
  });

  $('.course_content__accordion-collapse_btn').on('click', function(event) {
    event.preventDefault();
    let $parent = $(this).closest('.course_content__accordion-itm');
    $parent.removeClass('open');
    $('html, body').animate({
      scrollTop: $parent.offset().top - 100
    }, 500);
  });

}

function courseShare($){
  $('.course__share-header').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.course__share-body').slideToggle(200, function(){
      $(document.body).trigger("sticky_kit:recalc");
    });
    $(this).toggleClass('active');

  });
}

function courseConsist($){
  $('.course__consist-group__header').on('click', function(event) {
    event.preventDefault();
    $(this).siblings('.course__consist-group__body').slideToggle(300);
    $(this).toggleClass('active');
  });

  $('.course__consist-expand_all').on('click', function(event) {
    event.preventDefault();
    let $parent = $(this).closest('.course__consist');
    if ($(this).hasClass('is-open')) {
      $parent.find('.course__consist-group__body').slideUp();
    } else{
      $parent.find('.course__consist-group__body').slideDown();
    }
    $(this).toggleClass('is-open');
  })

  $('.course__consist-group-more_btn').on('click', function(event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).siblings('.course__consist-group.no-hidden').removeClass('no-hidden').addClass('hidden');
    }else{
      $(this).siblings('.course__consist-group.hidden').removeClass('hidden').addClass('no-hidden');
    }
    $(this).toggleClass('active');
  });
}



function mobMenuSubmenuToogle($){
  $('.mob_menu__nav_account li.has-submenu a').on('click', function(event) {
    event.preventDefault();
    $(this).closest('li').toggleClass('active');
    $(this).siblings('ul').slideToggle();
  });
}

function headerFix($){
  if (window.pageYOffset >= 58) { $(".header").addClass('active') }
  $(window).scroll(function() {
    var e = $(".header");
    window.pageYOffset >= 58 ? e.addClass('active') : e.removeClass('active');
  });
}

function copyShareUrl($){
  $('.course__share-url__copy_btn').on('click', function(event) {
    event.preventDefault();
    let text = $(this).closest('.course__share-url').find('.course__share-url__link a').text();
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  });
}

function fancyboxInit($){
  if(typeof($.fancybox) != 'undefined'){
    $.fancybox.defaults.closeExisting = true;
    $.fancybox.defaults.autoFocus = false;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.autoPlay = false;
    $.fancybox.defaults.video.autoStart = false;
  }
}

var coursePopupPlayer;
function videoPlayer($){
  if ($('#course_popup__video').length) {
    coursePopupPlayer = videojs('course_popup__video', {
    });
    coursePopupPlayer.on('play', function() {
      $('.course_popup__playlist-itm.current').find('.course_popup__playlist-play_btn').addClass('active');
    });
    coursePopupPlayer.on('pause', function() {
      $('.course_popup__playlist-itm.current').find('.course_popup__playlist-play_btn').removeClass('active');
    });
  }
}

$(document).on('click', '.course_popup__playlist-play_btn', function(event) {
  event.preventDefault();
  let $parent = $(this).closest('.course_popup__playlist-itm');

  if($parent.hasClass('current')){
    if (coursePopupPlayer.paused()) {
      coursePopupPlayer.play();
    }
    else {
      coursePopupPlayer.pause();
    }
  }else{
    let videoObj = $(this).closest('.course_popup__playlist-itm').data('video');
    coursePopupPlayer.poster(videoObj.poster);
    coursePopupPlayer.src(videoObj);
    coursePopupPlayer.play();
  }

  $(this).closest('.course_popup__playlist').find('.course_popup__playlist-play_btn').not($(this)).removeClass('active');
  $(this).toggleClass('active');
  $parent.siblings('.course_popup__playlist-itm').removeClass('current');
  $parent.addClass('current');

});

function stickySidebar($){
  if(typeof(window.jQuery.fn.stick_in_parent) != 'undefined'){
    $(".course__sidebar-stiky").stick_in_parent({
      offset_top: 30,
    });
    $(".school__sidebar-stiky").stick_in_parent({
      offset_top: 30,
    });
  }
}

// function pageTabs($){
//   $('.expert__nav-itm').on('click', function(event) {
//     event.preventDefault();
//     $(this).addClass('active');
//     $(this).siblings('.expert__nav-itm').removeClass('active')
//   });
// }

/*function mobBar($){
  $('.mob_bar__itm').on('click', function(event) {
    event.preventDefault();
    $('.mob_bar__itm').removeClass('active');
    $(this).addClass('active');
  });
}*/

function schoolGallary($){
  var recommendProductsSwiper = new Swiper('.school__gallary-slider', {
    slidesPerView: 'auto',
    slideClass: 'school__gallary-itm',
    wrapperClass: 'school__gallary-slider__list',
    speed: 400,
    loop: false,
    navigation: {
      prevEl: '.school__gallary-prev',
      nextEl: '.school__gallary-next',
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 'auto',
      }
    }
  });
}

function usefulMaterialsMoreBtn($){
  $('.useful_materials__more_btn').on('click', function(event) {
    event.preventDefault();
    if ($(this).hasClass('active')) {
      $(this).siblings('.useful_materials__checkbox.no-hidden').removeClass('no-hidden').addClass('hidden');
    }else{
      $(this).siblings('.useful_materials__checkbox.hidden').removeClass('hidden').addClass('no-hidden');
    }
    $(this).toggleClass('active')
  });
}

function schoolTab($){
  $('.school__nav-itm').on('click', function(event) {
    event.preventDefault();
    if (!$(this).hasClass('active')) {
      let tab = $(this).data('tab');
      changeTab(tab);
      if ($(this).closest('.school__top_bar')) {
        $('html, body').animate({
          scrollTop: $('.school_content').offset().top - 100
        }, 500);
      }
    }
  });

  $('.recommend_products__more_btn, .school__comments_all a, .course__params a[data-tab]').on('click', function(event) {
    event.preventDefault();
    let tab = $(this).data('tab');
    changeTab(tab);
    $('html, body').animate({
      scrollTop: $('.school_content').offset().top - 100
    }, 500);
  });

  function changeTab(tab){
    $('.school__nav-itm').removeClass('active');
    $('.school__nav-itm[data-tab="'+tab+'"]').addClass('active');
    $('.school_content__tab[data-tab]').hide();
    $('.school_content__tab[data-tab="'+tab+'"]').fadeIn();
    if (tab == 'tab-1') {
      $('.school__sidebar .shortcard--school').addClass('hidden');
      $('.school_content').removeClass('not-1-tab');
      $('.article__author--top').hide();
      $('.article__author--bot').show();
    } else{
      $('.school__sidebar .shortcard--school').removeClass('hidden');
      $('.school_content').addClass('not-1-tab');
      expendComment($);
      $('.article__author--top').show();
      $('.article__author--bot').hide();
    }
  }
}

function subscribeToggle($){
  $('.school__subscribe-toggle_btn').on('click', function(event) {
    event.preventDefault();
    $('.school__subscribe-form').addClass('active');
    $(this).remove();
  });
}

function selectizeInit($){
  if(typeof(Selectize) != 'undefined'){
    $('select.select').selectize({
      placeholder: $(this).data('placeholder'),
    })
  }
}


function infoPageNav($){
  $('.info_page__nav>ul>li.has-submenu>a').on('click', function(event) {
    if ($(window).innerWidth()>=992) {
      event.preventDefault();
      $(this).closest('li').toggleClass('is_open');
    }
  });

  $('.info_page__nav>ul>li.active>span').on('click', function(event) {
    if ($(window).innerWidth()<992) {
      event.preventDefault();
      $(this).closest('.info_page__nav').toggleClass('is_open');
    }
  });
}

function accordeonHendlers($){
  $('.accordeon__header').on('click', function(event) {
    let $parent = $(this).closest('.accordeon__itm');
    $parent.toggleClass('active');
    $parent.find('.accordeon__body').slideToggle();
  });
}

function faq($){
  $('.faq__itm-title').on('click', function(event) {
    event.preventDefault();
    let $parent = $(this).closest('.faq__itm');
    $parent.toggleClass('active');
    $parent.find('.faq__itm-descr').slideToggle();
  });
}



function fileInput($){
  $('.form_file input[type="file"]').on("change", function() {
    var files_str = "";
    files = this.files;
    for (var a = 0; a < files.length; a++) {
      if (a !== files.length - 1) {
        files_str += files[a].name + ", ";
      } else {
        files_str += files[a].name;
      }
    };
    $name = $(this).closest(".form_file").find(".form_file__name");
    if (files_str === "") {
      $name.text($name.data('placeholder')).attr("title", files_str);
      // $name.hide();
    } else {
      $name.text(files_str).attr("title", files_str);
      // $name.show();
    }
  });
}

function supportFormCallback($){
  $('.support__form-callback_btn').on('click', function(event) {
    event.preventDefault();
    $parent = $(this).closest('.support__form-callback');
    $parent.toggleClass('active');
    $parent.find('.support__form-callback_dropdown').slideToggle(200);
  });

  $('.support__form-callback_dropdown input[type=radio]').change(function(event) {
    $(this).val() == 'email' ? $('.support__form-callback_dropdown .note').hide() : $('.support__form-callback_dropdown .note').show()
  });
}

$('.form_consent input[type=checkbox]').on('change', function(event) {
  event.preventDefault();
  if ($(this).prop('checked')) {
    $(this).closest('form').find('[type="submit"]').removeClass('disabled')
  }else{
    $(this).closest('form').find('[type="submit"]').addClass('disabled')
  }
});
