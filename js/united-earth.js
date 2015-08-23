$( document ).ready(function() {
  $('#en-button').click(function(){
    if($('#en').hasClass('in'))
      $('#en').collapse('hide');
    else
      $('#en').collapse('show');
    $('#de').collapse('hide');
    $('#es').collapse('hide');
    $('#fr').collapse('hide');
  });

  $('#fr-button').click(function(){
    if($('#fr').hasClass('in'))
      $('#fr').collapse('hide');
    else
      $('#fr').collapse('show');
    $('#en').collapse('hide');
    $('#de').collapse('hide');
    $('#es').collapse('hide');
  });

  $('#es-button').click(function(){
    if($('#es').hasClass('in'))
      $('#es').collapse('hide');
    else
      $('#es').collapse('show');
    $('#es').collapse('show');
    $('#en').collapse('hide');
    $('#de').collapse('hide');
    $('#fr').collapse('hide');
  });

  $('#de-button').click(function(){
    if($('#de').hasClass('in'))
      $('#de').collapse('hide');
    else
      $('#de').collapse('show');
    $('#en').collapse('hide');
    $('#es').collapse('hide');
    $('#fr').collapse('hide');
  });
});
