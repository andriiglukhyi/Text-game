'use strict'

var names = localStorage.usernames.split(',');
var scores = localStorage.scores.split(',');
var list = document.getElementById('last')

var icogood = ['Yoda.ico', 'Obi Wan - Lightsaber.ico', 'Luke - Bespin Lightsaber.ico'];

var icomidle = ['Stormtrooper.ico' , 'R2D2.ico', 'Han Solo - Bespin.ico'];

var icobad = ['Darth Sidious.ico', 'Darth Maul - Lightsaber.ico', 'Darth Vader - Lightsaber.ico']

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
    var logo;
    var name = names[i];
    if (name === ""){
      name = "No name";
    }
    var score = scores[i];
    if (parseInt(score)> 134){
      logo = icogood[Math.floor(Math.random()*icogood.length)]
    }
    if (parseInt(score) < 67){
      logo = icobad[Math.floor(Math.random()*icobad.length)]
    }
    if (parseInt(score)>=67 && parseInt(score)<=134){
      logo = icomidle[Math.floor(Math.random()*icomidle.length)]
    }

    row = document.createElement('tr');
    col = document.createElement('td');

    col.innerHTML = '<img src =\"logo/' + logo + '\">' + name ;
    row.appendChild(col);

    col = document.createElement('td');

    col.textContent = score;
    row.appendChild(col);
    list.appendChild(row);
  }
}

create();
