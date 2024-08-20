$(document).ready(function () {
  $(".slider-image-container").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    arrows: false,
    swipe: false,
    draggable: false
  });

  function updateAdaptive() {
    if (window.innerWidth < 768) {
      $(".slider-prev, .slider-next").hide();
      $(".slider-image-container").slick('slickSetOption', 'swipe', true, true);
      $(".slider-image-container").slick('slickSetOption', 'draggable', true, true);
    }
    else {
      $(".slider-prev, .slider-next").show();
      $(".slider-image-container").slick('slickSetOption', 'swipe', false, true);
      $(".slider-image-container").slick('slickSetOption', 'draggable', false, true);
    }
  }

  updateAdaptive();

  window.onresize = updateAdaptive;

  $('.slider-prev').on('click', function () {
    $(".slider-image-container").slick('slickPrev');
  });

  $('.slider-next').on('click', function () {
    $(".slider-image-container").slick('slickNext');
  });
})
