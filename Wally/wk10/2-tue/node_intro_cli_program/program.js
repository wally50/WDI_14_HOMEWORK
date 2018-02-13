
// console.log(process.argv);

var sum = 0;

var input = process.argv;
var input = input.splice(2);
input.forEach(function(ip) {
  sum =  sum + Number(ip);
});

console.log('sum of ' + input + ' is ' + sum);
