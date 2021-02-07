"use strict";

window.addEventListener("load", initCalc);

let cb = document.querySelector("#doround");
let first;
let second;
let result;
let rounded;
let operator;
let decimal_text;
let decimal;
let history = [];

var math1 = {
  "+": function (x, y) {
    return x + y;
  },
  "-": function (x, y) {
    return x - y;
  },
  "*": function (x, y) {
    return x * y;
  },
  "/": function (x, y) {
    return x / y;
  },
};

function initCalc() {
  console.log("initCalc");
  document.querySelector("#calculate").addEventListener("click", readFirst);
  document.querySelector("#clear").addEventListener("click", clearResults);
}

function readFirst() {
  console.log("readFirst");

  let text1 = document.querySelector("#firstnumber").value;
  first = parseInt(text1, 10);

  readSecond();
}

function readSecond() {
  console.log("readSecond");

  let text2 = document.querySelector("#secondnumber").value;
  second = parseInt(text2, 10);

  readOperator();
}

function readOperator() {
  console.log("readOperator");

  var e = document.querySelector("#operator");
  operator = e.options[e.selectedIndex].text;

  doMath();
}

function doMath() {
  console.log("doMath");

  result = math1[operator](first, second);

  checkRound();
}

function checkRound() {
  console.log("checkRound");

  if (cb.checked === true) {
    roundResult();
  } else {
    writeResult();
  }
}

function roundResult() {
  console.log("roundResult");

  var f = document.querySelector("#decimals");
  decimal_text = f.options[f.selectedIndex].text;
  decimal = parseInt(decimal_text, 10);

  result = +result.toFixed(decimal);

  writeResult();
}

function writeResult() {
  console.log("writeResult" + result);

  let listElement = document.createElement("li");
  let createListString = document.createTextNode(result.toString());
  listElement.appendChild(createListString);
  document.getElementById("results").appendChild(listElement);
  document.querySelector("#results").scrollTo(0, 10000);
  document.querySelector("#firstnumber").value = result.toString();

  //   history.push(result);
  //   fillField();
}

// function fillField(item, index) {
//   console.log("fillField");

//   let results_list = document.querySelector("#results");
//   let nodes = history.map((lang) => {
//     let li = document.createElement("li");
//     li.textContent = lang;
//     return li;
//   });

//   results_list.append(...nodes);
// }

function clearResults() {
  console.log("clearResult");

  let deleteChildren = document.querySelector("#results");
  deleteChildren.innerHTML = "";

  let deleteInput1 = document.querySelector("#firstnumber");
  deleteInput1.value = "";

  let deleteInput2 = document.querySelector("#secondnumber");
  deleteInput2.value = "";
}

// document.getElementById('textbox_id').value
