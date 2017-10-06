$(document).ready(function () {
      $("#userInfo").on("click", function () {
      $(this).closest("li").toggleClass("active");
  });

  $("#menu_icon").on("click", function () {
      $(this).closest(".header_menu").toggleClass("active");
      return false;
  });

  var $button1 = document.querySelector(".button-1"),
  $container1 = document.querySelector(".container-1"),
  $button2 = document.querySelector(".button-2"),
  $container2 = document.querySelector(".container-2");

    $button1.addEventListener("click", function() {
    $container1.classList.add("active");
    $container2.classList.remove("active");

    $button1.classList.add("active");
    $button2.classList.remove("active");
    });

    $button2.addEventListener("click", function() {
    $container1.classList.remove("active");
    $container2.classList.add("active");

    $button1.classList.remove("active");
    $button2.classList.add("active");
    });

});


  