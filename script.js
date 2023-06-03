"use strict";
/*Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів*/
const hryvna = 40;
for (let i = 10; i <= 100; i += 10) {
  const dollar = hryvna * i;
  alert(i + " dollars equels" + dollar + " hryvnias.");
}

/*Дано ціле число. З'ясувати, чи є воно простим (простим називається число, більше ніж 1, яке не має інших дільників, крім 1 і себе).*/

const number = +prompt("Введіть ціле число:");

let prime = true;

if (number <= 1) {
  prime = false;
} else {
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      prime = false;
      break;
    }
  }
}

if (prime) {
  alert(number + " є простим числом.");
} else {
  alert(number + " не є простим числом.");
}

/*Дано ціле число. Визначити, чи можна одержати це число шляхом зведення числа 3 в деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)*/
const numeric = +prompt("Введіть ціле число:");

let isPowerOfThree = false;
let temp = 1;

while (temp < numeric) {
  temp *= 3;
  if (temp === numeric) {
    isPowerOfThree = true;
    break;
  }
}

if (isPowerOfThree) {
  alert(numeric + " можна отримати шляхом зведення числа 3 в деякий ступінь");
} else {
  alert(
    numeric + " не можна отримати шляхом зведення числа 3 в деякий ступінь"
  );
}
