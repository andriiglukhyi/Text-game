'use strict'

var answers = [];
var answer;
var answer1 =  document.getElementsByName('answer1');

function getanswers(){
  for(var i=0; i<10; i++){
    answer[i] = document.getElementsByName('answer[i]');
    answers.push(answer[i]);
    console.log(answers)
  }
}


var result = 60;

form1.addEventListener('Submit', getanswers);

// function counter(){
//   result+= answer1[0].value;
//   console.log(result);
//   return result;
// }
