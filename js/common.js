// клик по ссылки для плавного скрола к назначеному id
$(function() {
  $("#js-get-started").on("click", function(e){
    e.preventDefault();
    var sliderOffset = $("#slider").offset().top;

    $("html, body").animate({
      scrollTop: sliderOffset
    }, 500);
  });
});

var mainH = $("#js-main").height(),
    navH = $("#js-nav-container").innerHeight();

// функция для закрепления меню при скроле больше высоты экрана
$(document).on("scroll", function(){
  var documentScroll = $(this).scrollTop();
  if (documentScroll > mainH) {
    $("#js-nav-container").addClass("fixed");
    $("#js-main").css("paddingTop", navH);
  } else {
    $("#js-nav-container").removeClass("fixed");
    $("#js-main").removeAttr("style");
  }
});

$("#js-nav a").on("click", function(e){
  e.preventDefault();
  var currentBlock = $(this).attr("href"),
      currentBlockOffset = $(currentBlock).offset().top;

 $("html, body").animate({
      scrollTop: currentBlockOffset + 10
    }, 500);
}); 