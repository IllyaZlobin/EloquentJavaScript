console.log(`test function: ${test()}`); // 10
function test() {
  return 10;
}
/*
If we use function expression, we would to see the error
  console.log(`test function: ${test()}`); //error!
  let test = () => {
  return 10;
  }
*/
