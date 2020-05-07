/*
Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n
*/
function sumTo(n) {
  if (n === 1) return n;
  return n + sumTo(n - 1);
}
console.log(sumTo(3));//6

/*
Факториал
*/
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}
console.log(`factorial 4: ${factorial(7)}`);