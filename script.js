$(document).ready(function() {
  $(".nav-button").click(function() {
    $(".nav-button").toggleClass("change");
  });
});
$(window).scroll(function() {
  let position = $(this).scrollTop();
  if (position >= 200) {
    $(".nav-menu").toggleClass("custom-navbar");
  } else {
    $(".nav-menu").removeClass("custom-navbar");
  }
});
$(document).ready(function() {
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    console.log(position);
    if (position >= 650) {
      $(".camera-img").addClass("fromLeft");
      $(".mission-text").addClass("fromRight");
    } else {
      $(".camera-img").removeClass("fromLeft");
      $(".mission-text").removeClass("fromRight");
    }
  });
  $(".gallery-list-item").click(function() {
    let value = $(this).attr("data-filter");
    if (value === "All") {
      $(".filter").show(300);
    } else {
      $(".filter")
        .not("." + value)
        .hide(300);
      $(".filter")
        .filter("." + value)
        .show(300);
    }
  });
  $(".gallery-list-item").click(function() {
    $(this).addClass("active-item");
    $(this)
      .siblings()
      .removeClass("active-item");
  });
  $(window).scroll(function() {
    let position = $(this).scrollTop();
    if (position >= 4300) {
      $(".card-1").addClass("moveFromLeft");
      $(".card-2").addClass("moveFromBottom");
      $(".card-3").addClass("moveFromLeft");
    } else {
      $(".card-1").removeClass("moveFromLeft");
      $(".card-2").removeClass("moveFromBottom");
      $(".card-3").removeClass("moveFromLeft");
    }
  });
});
