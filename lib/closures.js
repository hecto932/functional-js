function buildSum(a) {
  return function(b) {
    return a + b;
  }
}

const addFive = buildSum(5);

console.log(addFive(5));

/////////////////

const buildSum2 = a => b => a + b;
const addFive2 = buildSum2(5)

console.log(addFive(5));