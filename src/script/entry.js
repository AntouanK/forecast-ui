
'use strict';

console.log('this is the Forecast app.');

var printInput = function() {
  var inputDateElement 
    = document.querySelector('#input-date');
  
  var inputCompetionElement 
    = document.querySelector('#input-competition');

  var inputCompetitorAElement 
    = document.querySelector('#input-competitor-a');

  var inputCompetitorBElement 
    = document.querySelector('#input-competitor-b');

  var values = 
    { date: inputDateElement.value
    , competition: inputCompetionElement.value 
    , competitorA: inputCompetitorAElement.value
    , competitorB: inputCompetitorBElement.value
    };

  console.log(values); 
};

