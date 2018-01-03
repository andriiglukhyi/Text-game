'use strict'

var first = true;
var form = document.getElementById('form1');
// answers.push(answer1);
form.addEventListener('submit', getanswers);

var score = 65;

function getanswers(){
  event.preventDefault();
  var data = [];
  var data1 = [];
  score = 65;
  for(var i=1; i<11; i++){
    var answer = document.getElementsByName('answer'+[i]);
    data.push(answer);
    // console.log(data);
  }
  for (var question=0; question<data.length; question++){
    for(var answer = 0; answer<data[question].length; answer++ ){
      if (data[question][answer].checked === true){
        data1.push(parseInt(data[question][answer].value));
      }
    }
  }
  for(var i=0; i<data1.length; i++ ){
    score += data1[i];
  }
  var scaledScore = score / 130;
  gauge.value(scaledScore);
  console.log(score);
}

document.getElementById("demo").addEventListener("click", myFunction);

function myFunction() {
  if (first === true){
    document.getElementById("demo").innerHTML = "Finish";
    first = false;
  } else {
    document.getElementById("form1").remove();
    // document.getElementById("picture-list").remove();
    var a = document.getElementById("form2");
    a.style.display = "block";
    var b = document.getElementById("retake_botton");
    b.style.display = "block";

  }
}


addEventListener

function Gauge(el) {

    // ##### Private Properties and Attributes

    var element,      // Containing element for the info component
        data,         // `.gauge__data` element
        needle,       // `.gauge__needle` element
        value = 0.0,  // Current gauge value from 0 to 1
        prop;         // Style for transform

    // ##### Private Methods and Functions

    var setElement = function(el) {
        // Keep a reference to the various elements and sub-elements
        element = el;
        data = element.querySelector(".gauge__data");
        needle = element.querySelector(".gauge__needle");
    };

    var setValue = function(x) {
        value = x;
        var turns = -0.5 + (x * 0.5);
        data.style[prop] = "rotate(" + turns + "turn)";
        needle.style[prop] = "rotate(" + turns + "turn)";
    };

    // ##### Object to be Returned

    function exports() { };

    // ##### Public API Methods

    exports.element = function(el) {
        if (!arguments.length) { return element; }
        setElement(el);
        return this;
    };

    exports.value = function(x) {
        if (!arguments.length) { return value; }
        setValue(x);
        return this;
    };

    // ##### Initialization

    var body = document.getElementsByTagName("body")[0];
    ["webkitTransform", "mozTransform", "msTransform", "oTransform", "transform"].
        forEach(function(p) {
            if (typeof body.style[p] !== "undefined") { prop = p; }
        }
    );

    if (arguments.length) {
        setElement(el);
    }

    return exports;

};

var gauge = new Gauge(document.getElementById("gauge"));

gauge.value(0.5);
