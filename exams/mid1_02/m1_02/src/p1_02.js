const result1 = document.querySelector('.result1');
const result2 = document.querySelector('.result2');
const result3 = document.querySelector('.result3');

let h1 = 1.75,
  w1 = 55;
let h2 = 1.75,
  w2 = 70;
let h3 = 1.75,
  w3 = 85;

let b1 = w1 / (h1 * h1).toFixed(1);
let b2 = w2 / (h2 * h2).toFixed(1);
let b3 = w3 / (h3 * h3).toFixed(1);

result1.textContent = `BMI = ${b1.toFixed(1)}, (h,w)=(${h1},${w1})`;
result2.textContent = `BMI = ${b2.toFixed(1)}, (h,w)=(${h2},${w2})`;
result3.textContent = `BMI = ${b3.toFixed(1)}, (h,w)=(${h3},${w3})`;
