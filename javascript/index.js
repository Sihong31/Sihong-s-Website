$(document).on('ready', function(){
  $('[data-popup-open]').on('click', function(e)  {
    var targeted_popup_class = $(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').slideDown(1000);
      e.preventDefault();
  });

  $('[data-popup-close]').on('click', function(e)  {
    var targeted_popup_class = $(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').slideUp(500);
      e.preventDefault();
  });
})