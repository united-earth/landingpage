$( document ).ready(function() {
  var resetButtons = function(){
    $('#about .btn-group button').removeClass('btn-success');
  }

  $('#en-button').click(function(){
    $('#about .introduction').collapse('hide');
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
    $('#about .introduction').collapse('hide');
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
    $('#about .introduction').collapse('hide');
    resetButtons();
    $('#es-button').addClass('btn-success');
    if($('#es').hasClass('in')){
      resetButtons();
      $('#es').collapse('hide');
    }
    else
      $('#es').collapse('show');
  });

  $('#pt-button').click(function(){
    $('#about .introduction').collapse('hide');
    resetButtons();
    $('#pt-button').addClass('btn-success');
    if($('#pt').hasClass('in')){
      resetButtons();
      $('#pt').collapse('hide');
    }
    else
      $('#pt').collapse('show');
  });

  $('#de-button').click(function(){
    $('#about .introduction').collapse('hide');
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
  $('#fr-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1V8IFO2Vj8oYk7g-lWwaDJduD-Lh3rRpQzRVuOgY9SXc/viewform?embedded=true');
    resetSurveyButtons();
    $('#fr-survey-button').addClass('btn-success');
  });
  $('#pt-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1TnzYvIfbtQgK9uyBYeu4Fg72z_DySW9C9sMPdLN_HUs/viewform?embedded=true');
    resetSurveyButtons();
    $('#pt-survey-button').addClass('btn-success');
  });
  $('#es-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1y3sGAQO5cV5awrCcvT9yFTgzya59uHDqv3RaCYFhe2M/viewform?embedded=true');
    resetSurveyButtons();
    $('#es-survey-button').addClass('btn-success');
  });
  $('#de-survey-button').click(function(){
    $('#survey-iframe').prop('src', 'https://docs.google.com/forms/d/1ZK7zMrTejY00bWVgahgoFwujjIl8mvJc5f74xQj-me8/viewform?embedded=true');
    resetSurveyButtons();
    $('#de-survey-button').addClass('btn-success');
  });


});
