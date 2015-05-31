$(document).ready(function () {

  $(".m-scooch").scooch();
  $("a.burger").click(function () {
    $(this).closest('header, footer').toggleClass("on");
  });

  window.setInterval(function () {
    $(".m-scooch").each(function () {
      if ($(this).find('.m-active').is(":last-child")) {
        $(this).scooch('move', 1);
      } else {
        $(this).scooch('next');
      }
    });

  }, 5000);



});
