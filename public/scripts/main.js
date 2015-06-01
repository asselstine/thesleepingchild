function enable_scrolling_carousel() {
  window.setInterval(function () {
    $(".m-scooch").each(function () {
      if ($(this).find('.m-active').is(":last-child")) {
        $(this).scooch('move', 1);
      } else {
        $(this).scooch('next');
      }
    });
  }, 5000);
}

$(document).ready(function () {

  $(".m-scooch").scooch();
  $("a.burger").click(function () {
    $(this).closest('header, footer').toggleClass("on");
  });

  enable_scrolling_carousel();

});
