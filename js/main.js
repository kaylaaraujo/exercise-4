$(document).ready(function() {

  $('#select-default').bind("click", toggle);

  function toggle() {
    if ($('#select-dropdown').hasClass('open')) {
      collapse();
    } else {
      expand();
    }
  }
  function expand() {
    $('#select-dropdown').removeClass('closed').addClass('open');

    options = $('.select');

    options.each(function(index) {
      var layer = options.length - index;
      $(this).css("top", 50 * index + "px");
      $(this).css("width", 270);
      $(this).css("margin-left", -150);
    });
  }
  function collapse() {
    $('#select-dropdown').removeClass('open').addClass('closed');

    options = $('.select');

    options.each(function(index) {
      var layer = options.length - index;
      $(this).css("z-index", layer);
      $(this).css("top", 2 * index + "px");
      $(this).css("width", 270 - 2 * index);
      $(this).css("margin-left", -150 + index);
    });
  }

  $('.option').bind("click", select);

  function select() {
    if ($('#select-dropdown').hasClass('open')) {
      var selection = $(this).text();
      $('#select-default').text(selection);
      var data = $(this).data("id");

      window.dropdown = data;
      console.log(window.dropdown);

      collapse();
    } else {
      expand();
    }
  }

  collapse();
});