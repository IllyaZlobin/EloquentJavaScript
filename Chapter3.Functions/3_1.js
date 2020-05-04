/*
Напишите функцию min, которая принимает два
аргумента и возвращает их минимум. 
*/
function min(a, b) {
  return a > b ? b : a;
}
console.log(min(2, 8));

/* ANOTHER SOLUTION
function min(a, b) {
  if (a < b) return a;
  else return b;
}
*/
