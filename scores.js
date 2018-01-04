'use strict'

var names = localStorage.usernames.split(',');
var scores = localStorage.scores.split(',');
var list = document.getElementById('last')


function create() {
  var row = document.createElement('tr');
  var col = document.createElement('th');


  col.textContent = 'Name';
  row.appendChild(col);

  col = document.createElement('th');
  col.textContent = 'Score';
  row.appendChild(col);

  list.appendChild(row);

  for (var i = 0; i < names.length; i++){
    var name = names[i];
    if (name === ""){
      name = "No name";
    }
    var score = scores[i];
    row = document.createElement('tr');
    col = document.createElement('td');

    col.textContent = name;
    row.appendChild(col);

    col = document.createElement('td');

    col.textContent = score;
    row.appendChild(col);
    list.appendChild(row);
  }
}

create();
