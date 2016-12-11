
'use strict';

console.log('this is the Forecast app.');

var printInput = function() {
  var inputDateElement 
    = document.querySelector('#input-date');
  
  var inputCompetitionElement 
    = document.querySelector('#input-competition');

  var inputCompetitorAElement 
    = document.querySelector('#input-competitor-a');

  var inputCompetitorBElement 
    = document.querySelector('#input-competitor-b');

  var values = 
    { date: inputDateElement.value
    , competition: inputCompetitionElement.value 
    , competitorA: inputCompetitorAElement.value
    , competitorB: inputCompetitorBElement.value
    };


  var eventListElement 
    = document.querySelector('#event-list');

  eventListElement.innerHTML 
    = '<ul>'
    + '<li> Date: ' + values.date + '</li>' 
    + '<li> Competition: ' + values.competition + '</li>' 
    + '</ul>';
};

