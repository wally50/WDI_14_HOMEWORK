//Your name

var name = prompt('What is your name?');
console.log(name);


// menu choice

var menuItem = prompt('Select one from steak, fruit salad, tofurkey, pork phops');
  if(menuItem == 'steak' || menuItem == 'pork chops'){
    console.log('Vegans beware!');
  } else {console.log('This cuisine is vegan friendly.');
  }

  //fortune teller

  var noOfChildren = 3;
  var partnersName = 'Kirsten';
  var geogLocale = 'Melbourne';
  var jobTitle = 'Billionare';
  console.log('You will be a ' + jobTitle + ' in ' + geogLocale + ', and married to ' + partnersName + ' with ' + noOfChildren + ' kids.');

// age calculator

var currentYear = 2017;
var birthYear = 1996;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
console.log('They are either '+ age2 + ' or ' + age1);

//lifetime supply

var currentAge = 50;
var maxAge = 100;
var estDailyUse = 3;
var totalConsumed = (maxAge - currentAge) * estDailyUse;
console.log('You will need ' + totalConsumed + ' to last you until the ripe old age of ' + maxAge);
