'use strict'

var data = [];
var data1 = [];
var score = 60;
var form = document.getElementById('form1');
// answers.push(answer1);
form.addEventListener('submit', getanswers);


function getanswers(){
  event.preventDefault();
  for(var i=1; i<11; i++){
    var answer = document.getElementsByName('answer'+[i]);
    data.push(answer);
    console.log(data);
  }
  for (var question=0; question<data.length; question++){
    for(var answer = 0; answer<data[question].length; answer++ ){
      if (data[question][answer].checked === true){
        data1.push(parseInt(data[question][answer].value));
      }
    }
  }
  for(var i=0; i<data1.length; i++ ){
    score += data1[i]
  }
}




// function counter(){
//   result+= answer1[0].value;
//   console.log(result);
//   return result;
// }
