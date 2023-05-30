"use strict";
let input = +prompt("Enter a number of hours");

while (!input || isNaN(input)) {
  input = +prompt("Enter a NUMBER of hours");
}

const seconds = 3600 * input;
alert("There are " + seconds + " seconds");
