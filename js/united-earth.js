$( document ).ready(function() {
  var resetButtons = function(){
    $('#about .btn-group button').removeClass('btn-success');
  }

  $('#en-button').click(function(){
    $('#de').collapse('hide');
    $('#es').collapse('hide');
    $('#fr').collapse('hide');
    resetButtons();
    $('#en-button').addClass('btn-success');
    if($('#en').hasClass('in')){
      $('#en').collapse('hide');
      resetButtons();
    }
    else
      $('#en').collapse('show');
  });

  $('#fr-button').click(function(){
    $('#en').collapse('hide');
    $('#de').collapse('hide');
    $('#es').collapse('hide');
    resetButtons();
    $('#fr-button').addClass('btn-success');
    if($('#fr').hasClass('in')){
      resetButtons();
      $('#fr').collapse('hide');
    }
    else
      $('#fr').collapse('show');
  });

  $('#es-button').click(function(){
    $('#es').collapse('show');
    $('#en').collapse('hide');
    $('#de').collapse('hide');
    $('#fr').collapse('hide');
    resetButtons();
    $('#es-button').addClass('btn-success');
    if($('#es').hasClass('in')){
      resetButtons();
      $('#es').collapse('hide');
    }
    else
      $('#es').collapse('show');
  });

  $('#de-button').click(function(){
    $('#en').collapse('hide');
    $('#es').collapse('hide');
    $('#fr').collapse('hide');
    resetButtons();
    $('#de-button').addClass('btn-success');
    if($('#de').hasClass('in')){
      resetButtons();
      $('#de').collapse('hide');
    }
    else
      $('#de').collapse('show');
  });

  var resetSurveyButtons = function(){
    $('#survey .translation-buttons button').removeClass('btn-success');
  }

  $('#en-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1YbQ1RjpsOifaz5IMOWnmHNQ9lVXRXTlACC0CmkiqCUQ/viewform?embedded=true');
    resetSurveyButtons();
    $('#en-survey-button').addClass('btn-success');
  });
  $('#de-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1GwT-nSoQac7Pg1Xa30wi-rSnJtfhAUnnHUGLZ1W024s/viewform?embedded=true');
    resetSurveyButtons();
    $('#de-survey-button').addClass('btn-success');
  });
});
