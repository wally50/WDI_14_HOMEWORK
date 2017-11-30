console.log('ready');

var days_of_the_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
//console.log(days_of_the_week);

var tempDay = days_of_the_week.pop();
console.log(days_of_the_week);

var newDoW = days_of_the_week.unshift(tempDay);
console.log(days_of_the_week);

var weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var weekendDays = ["Saturday", "Sunday"];
var week = new Array (weekDays, weekendDays);
//console.log(weekDays + "," + weekendDays);
console.log(week);

var weekDays2 = week.pop();
console.log(week);

var alphaDays = week[0].sort();
console.log(alphaDays);
