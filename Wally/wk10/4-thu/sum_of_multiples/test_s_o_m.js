
var sumOfMultiples = require('./sum_of_multiples.js');

//
// test - for up to and INCLUDING given number
// as per question, (not the given example 3 + 5 + 6 + 9 = 23)
// ie.  3 + 5 + 6 + 9 + 10 = 33

console.log('test results below');

if (sumOfMultiples.sumOfMultiples(9) === 9) {
  console.log("\x1b[32m",'test true: 9 => 23',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST to see if tests flag invalid expected value, 9 => 9',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(0) == "enter number which is 3 or more") {
  console.log("\x1b[32m",'test true: 0 => enter number which is 3 or more',"\x1b[0m");
} else {
  console.log("\x1b[31m",'test FAIL: 0',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(5) === 8) {
  console.log("\x1b[32m",'test true: 5 => 8',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST FAIL: 5',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(9) === 23) {
  console.log("\x1b[32m",'test true: 9 => 23',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST FAIL: 9',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(10) === 33){
  console.log("\x1b[32m",'test true: 10 => 33',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST FAIL: 10',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(29) !== 225) {
  console.log("\x1b[32m",'test true: 29 !=> 225',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST FAIL: 29',"\x1b[0m");
}

if (sumOfMultiples.sumOfMultiples(30) === 225){
  console.log("\x1b[32m",'test true: 30 => 225',"\x1b[0m");
} else {
  console.log("\x1b[31m",'TEST FAIL: 30',"\x1b[0m");
}
