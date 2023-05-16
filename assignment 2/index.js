// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><html><body><div id="myDiv">Hello, World!</div></body></html>');

// const document = dom.window.document;
// const myDiv = document.getElementById('myDiv');
// console.log(myDiv.textContent); 

//practice_one
const fruit=['mango', 'banana', 'pineapple','grapes', 'orange'];
for(let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
fruit[3]='Durian';
console.log(fruit[3]);
fruit.push('apple','avocado');
console.log(fruit);
fruit.splice(0,1);
console.log(fruit);

const number = [1,2,3,4,5,6,7];
const number2 = number.map(x => Math.pow(x,2));
console.log(number2);

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
var array = [];
for (var i = 1; i <= 100; i++) {
  array.push(i);
}
const filter = array.filter(x => isPrime(x)===true);
console.log(filter);

const sum = array.reduce((accumulater,currentvalue)=>{return accumulater+currentvalue;}, 0);
console.log(sum);

//practice_two
const ppl = {
    name:'Alice',
    age: 20,
    great: function(){ return ('hello');
    },
    friend:['Bob','Cindy','David']
}
console.log(ppl.age,ppl.name,ppl.great(),ppl.friend);

//practice_three
const context = document.getElementById("paragraph");

const elements = document.getElementsByClassName('get_all');

for (let i = 0; i < elements.length; i++) {
  console.log(elements[i].textContent+'forelement');
};

document.addEventListener('DOMContentLoaded', function() {
  const query = document.querySelector('.get_all2');
  console.log(query.textContent + ' queryselector');
});


/*NodeList 不直接具有 textContent 属性，因为它代表的是多个元素。
想获取每个元素的文本内容，需要遍历 NodeList，并针对每个元素进行操作。 */

//practice_four
document.addEventListener('DOMContentLoaded', function() {
  const domp = document.getElementById("dcp");
  var paragraph = document.createElement('p');
  console.log(paragraph);
  paragraph.textContent = 'My first DOM created.';
  domp.appendChild(paragraph);
});

var d = document.getElementById("dcp");
//practice_five
var input = document.getElementById('myInput');
var button = document.getElementById('myButton');

if (d !== null) {
  var ul = document.createElement('ul');
  d.appendChild(ul);
  var colors = ['red', 'blue', 'yellow'];
  for (var i = 0; i < colors.length; i++) {
    var li = document.createElement('li');
    li.textContent = colors[i];
    ul.appendChild(li);
  }
} else {
  console.log("Element with ID 'domp' not found.");
}
button.addEventListener('click', function() {
  var cl=colors.length;
  console.log('-------'+cl+'-------');
  colors.push(input.value);
  console.log(colors);
  for (var i = cl; i < colors.length; i++) {
    var li = document.createElement('li');
    li.textContent = colors[i];
    ul.appendChild(li);
  }
});
