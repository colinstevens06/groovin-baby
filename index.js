$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })


  $("#dropdown-1").on("click", function () {
    $("#dropdown-1-options").fadeToggle()
  })

  $("#dropdown-2").on("click", function () {
    $("#dropdown-2-options").fadeToggle()
  })

})