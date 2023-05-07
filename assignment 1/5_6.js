//Practice_One
let age=0;
console.log(age);

let age20=20;
console.log(age20>age);

let age18=18;
console.log(age18 && age20 >= 18);

var odd=4;
console.log(odd); 

//Practice_Six
function findMax(a, b, c) {
  var max = Math.max(a, b, c);
  return max;
}

var max = findMax(14, 1, 200);
document.write(max+"<br>");

//Practice Four
for (var i = 0; i < 10000; i++) {
  console.log(i);
} 
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}

let result = [];

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    result.push(i);
  }
}
document.write(result)
console.log(result);

var triangle=10
for (i=1;i<triangle;i++){
  var star=''
  for(j=1; j<i;j++){
  var star=star+"*"
  }
  document.write(star+"<br>")
}

for(i=1;i<10;i++){
  for(j=1;j<10;j++){
    document.write(i+'*'+j+"="+i*j+"<br>")
  }
}

//Practice_Two
var year = 2023; 
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}
var age2 = document.getElementById('age2');
console.log(age2);

function checkNumber() {
  var inputAge = document.getElementById("inputNumber");
  
  if (inputAge.value >= 18) {
    age2.innerHTML = "You can vote.";
  } else {
    age2.innerHTML = "You can't vote.";
  }
  
  var inputNumber = document.getElementById("inputNumber");
  
  if (inputNumber.value % 2 == 1) {
    document.getElementById("odd").innerHTML = "Yes";
  } else {
    document.getElementById("odd").innerHTML = "No";
  }

  var num1 = Math.floor(Math.random()*100);
  var num2 = Math.floor(Math.random()*10);
  var min = Math.min(num1, num2);
  var max = Math.max(num1, num2);
  document.getElementById("max").innerHTML=max
  document.getElementById("min").innerHTML=min
  
  if (inputNumber.value>min && inputNumber.value<max){
    document.getElementById("range").innerHTML = "it's in the range";
  }
  else{
    document.getElementById("range").innerHTML = "it's not";
  }
  
}

//Practice_Three
function checkWeek() {
  var inputWeek = document.getElementById("inputWeek").value.toString();

  switch (inputWeek) {
    case "1":
      document.getElementById("week").innerHTML = "Monday";
      break;
    case "2":
      document.getElementById("week").innerHTML = "Tuesday";
      break;
    case "3":
      document.getElementById("week").innerHTML = "Wednesday";
      break;
    case "4":
      document.getElementById("week").innerHTML = "Thursday";
      break;
    case "5":
      document.getElementById("week").innerHTML = "Friday";
      break;
    case "6":
      document.getElementById("week").innerHTML = "Saturday";
      break;
    case "0":
      document.getElementById("week").innerHTML = "Sunday";
      break;
    default:
      document.getElementById("week").innerHTML = "Invalid day";
      break;
  }
}
function checkSeason() {
  var inputSeason = parseInt(document.getElementById("inputSeason").value);
  var result = "";

  switch (inputSeason) {
    case 1:
      result = "Spring";
      break;
    case 2:
      result = "Summer";
      break;
    case 3:
      result = "Fall";
      break;
    case 4:
      result = "Winter";
      break;
    default:
      result = "Invalid season";
      break;
  }

  document.getElementById("result").innerHTML = result;
}







