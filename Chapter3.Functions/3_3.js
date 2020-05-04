/*
Напишите функцию countBs, которая принимает строку в качестве единственного аргумента и возвращает число, показывающее, сколько больших
букв ~В~ содержится в этой строке.

Затем напишите функцию countChar, которая ведет себя как countBs, за исключением того, что принимает второй аргумент, 
указывающий, какие именно символы нужно посчитать (вместо того чтобы считать только большие
буквы ~В~). Перепишите countBs, чтобы использовать эту новую функцию. 
*/
function countBs(str) {
  let strLength = str.length;
  let couter = 0;
  for (let i = 0; i < strLength; i++) {
    if (str[i] === "B") {
      couter++;
    }
  }
  return couter;
}

function countChar(str, findElem) {
    let strLength = str.length;
    let couter = 0;
    for (let i = 0; i < strLength; i++) {
      if (str[i] === findElem) {
        couter++;
      }
    }
    return couter;
  }
console.log(countBs('abcdefB'));// 1
console.log(countChar('testTEXTT', 'T'));// 3
