var scrollTimer = null;

function reset_scrolling_carousel() {
  if (scrollTimer) {
    window.clearInterval(scrollTimer);
  }
  scrollTimer = window.setInterval(function () {
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
  $(".m-scooch-controls a").click(function () {
    reset_scrolling_carousel();
  });

  $("a.burger").click(function () {
    $(this).closest('header, footer').toggleClass("on");
  });

  reset_scrolling_carousel();

});
