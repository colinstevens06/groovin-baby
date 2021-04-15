$(document).ready(function () {

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })

  $('#deals__completed-order-btn').on("click", function () {
    $('#deals__completed-order-options').fadeToggle()
  })

  $('#deals__refunded-order-btn').on("click", function () {
    $('#deals__refunded-order-options').fadeToggle()
  })

})