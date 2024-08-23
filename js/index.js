$(document).ready(function () {
  $(".slider-image-container").slick({
    autoplay: true,
    infinite: true,
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
});

const feedbackEnable = document.getElementById('feedback-link');
const feedbackForm = document.getElementById('feedback-form-wrapper');
const feedbackDisable = document.getElementById('close-button');

feedbackEnable.addEventListener('click', function () {
  feedbackForm.style.zIndex = 1000;
  feedbackForm.style.opacity = 1;
});

feedbackDisable.addEventListener('click', function () {
  feedbackForm.style.opacity = 0;
  setTimeout(() => {
    feedbackForm.style.zIndex = -1;
  }, 500);
});

const submitButton = document.getElementById('submit-button');

const nameField = document.getElementById('name');
const phoneField = document.getElementById('number');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

submitButton.addEventListener('click', function () {
  if (!nameField.checkValidity()) {
    alert('Name field must be from 3 to 32 characters long');
    return;
  }

  if (!phoneField.checkValidity()) {
    alert('Phone number must be like +38(XXX)XXX-XX-XX (digits only)');
    return;
  }

  if (!emailField.checkValidity()) {
    alert('Email must be like example@mail.com');
    return;
  }

  if (!messageField.checkValidity()) {
    alert('Message cannot be empty');
    return;
  }

  alert('Your message was delivered');
  
  feedbackForm.style.opacity = 0;
  setTimeout(() => {
    feedbackForm.style.zIndex = -1;
  }, 500);
})