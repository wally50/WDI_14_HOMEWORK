
console.log('Sum of Multiples - ready');

var givenNumber = process.argv[2];

function sumOfMultiples (input) {
  if (input <  3) {
    console.log("enter number which is 3 or more");
    return ("enter number which is 3 or more");
  }
  var sumValue = 0;
  for (n =1; n <= input; n++){
    if(n % 3 === 0 || n % 5 === 0) {
      sumValue = sumValue + n;
    }
  }
  console.log ("Sum of multiples of (3 & 5) up to and including " + input + " is:  " + sumValue);
  return (sumValue);
}


sumOfMultiples(givenNumber);

module.exports = {
  sumOfMultiples:sumOfMultiples
};
