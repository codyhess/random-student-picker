var pickButton;
var header;
var body;
var choice;
var aList;

var students = [
  "Guzal",
  "Chaltin",
  "Angel",
  "Cesa",
  "Asiya",
  "Drew",
  "Ivan",
  "Shanda",
  "John",
  "Thomas",
  "Stephanie",
  "Krystal",
  "Vanessa",
  "Rachel",
  "Rafael",
  "Susan",
  "Emin",
  "Steve",
  "AJ",
  "Tasi",
  "Deborah",
  "Eric",
  "Lucy",
  "Janette",
  "Monica",
  "Kevin",
  "Fabio",
  "Asia",
  "Julissa",
  "Mike",
  "Sheriff",
  "James",
  "Crystal",
  "Susana",
  "Kyla",
  "Omari"
];

var colors = [
  'hotpink',
  'orange',
  'fuchsia', 0,
  'lightblue', 0,
  'black'
];
var cur = 0;

document.addEventListener('DOMContentLoaded', () => {
  console.log('hello rand.js');

  body = document.getElementById('body');
  header = document.getElementById('header');
  pickButton = document.getElementById('pickButton');
  choice = document.getElementById('choice');
  aList = document.getElementById('aList');

  pickButton.addEventListener('click', pickOnClick );
  aList.addEventListener('click', aListOnClick );

  // build the attendance list
  for (let i=0; i<students.length; i++) {
    let li = document.createElement('li');
    li.innerText = students[i];
    aList.append(li);
  }
});

var pickOnClick = function (event) {
  choice.innerHTML = '&nbsp;'
  var rand = students[Math.floor(Math.random() * students.length)];
  var rand2 = students[Math.floor(Math.random() * students.length)];
  var x = window.setInterval(() => {
    if (colors[cur] === undefined) {
      window.clearInterval(x);
      cur = 0;
      choice.innerText = rand + ", " + rand2;
      return;
    }
    if (colors[cur]) header.style.color = colors[cur];
    if (colors[cur-1]) body.style.backgroundColor = colors[cur-1];
    cur += 1;
  }, 200);
}

var aListOnClick = function (event) {
  if (event.target.tagName === 'LI') {
    event.target.style.textDecoration = 'line-through';
  }
}
