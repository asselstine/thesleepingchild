$(document).ready(function () {

  $(".m-scooch").scooch();
  $("a.burger").click(function () {
    $(this).closest('header').toggleClass("on");
  });

});
