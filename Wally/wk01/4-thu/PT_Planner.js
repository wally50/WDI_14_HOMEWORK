console.log('PT Planner Ready');

//PT PLANNER
//Melbourne Public Transport Journey Planner
//There are 3 train lines:

//The Alamein line has the following stops: Flinders Street, Richmond, East Richmond, Burnley, Hawthorn, and Glenferrie.
//The Glen Waverly line has the following stops: Flagstaff, Melbourne Central, Parliament, Richmond, Kooyong and Tooronga.
//The Sandringham line has the following stops: Southern Cross, Richmond, South Yarra, Prahran, and Windsor.

//All 3 train lines intersect at Richmond, but there are NO other intersection points as trains run express.

//Write a javascript program that works out display the journey when you give it an origin and destination.

//example:

//origin: Melbourne Central
//destination: Richmond

//Melbourne Central -----> Parliament -----> Richmond

//2 stops total
//You may want to hard code the origin and destination for easier testing in the beginning.

//Hints:

//Consider diagramming the lines by sketching out the train lines and their stops and intersection. Think about what data structure to use to store each line and all the stops on each line.

//The key to the lab is the intersection of the lines at Richmond.

//Non-Required Bonus:

//input validation
//User must enter a line and station in the subway network
//If the user enters something else, your program should handle it
//Add additional lines*/


var alemeinOuter = ['Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie'];
var alemeinInner = ['Flinders Street', 'Richmond'];
var glenWaverlyOuter = ['Richmond', 'Kooyong', 'Tooronga'];
var glenWaverlyInner = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond'];
var sandringhamOuter = ['Richmond', 'South Yarra', 'Prahran', 'Windsor'];
var sandringhamInner = ['Southern Cross', 'Richmond'];

//var alemein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie' ];
//var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga'];
//var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor'];

var railLines = [alemeinInner, alemeinOuter, glenWaverlyInner, glenWaverlyOuter, sandringhamInner, sandringhamOuter];

//var railLines = [alemein, glenWaverly, sandringham ];
var railLinesTravelled = [];

//var origin = 'Flinders Street';
//var origin = 'Burnley';
var origin = 'East Richmond';

//var origin = 'Melbourne Central';
//var origin = 'Tooronga';

//var origin = Southern Cross';
//var origin = 'Windsor';

//var origin = 'Richmond';



//var destination = 'Flinders Street';
var destination = 'Hawthorn';

//var destination = 'Flagstaff';
//var destination = 'Kooyong';

//var destination = 'Southern Cross';
//var destination = 'Windsor';

//var destination = 'Richmond';

//If origin  = destination = richmond
console.log('');
console.log('Origin: ' + origin);
console.log('Destination: ' + destination);
console.log('');
console.log('');

if( origin == destination) {
  alert('Get off train !!');
}
// Reverse railway line array order as required, depeding on if origin or destination

// if richmond is origin or destination - only one array being that of other station chosen


//if((origin == 'Richmond') || (destination == 'Richmond')) {
//for(var x = 0; x < railLines.length; x++) {
  //if ((railLines[x].indexOf(origin) >= 0) || (railLines[x].indexOf(destination) >= 0)){
    //railLinesTravelled.push(railLines[x]);
  //}
//}


//}
//which arrays?

  for(var x = 0; x < railLines.length; x++) {
    if ((railLines[x].indexOf(origin) >= 0) || (railLines[x].indexOf(destination) >= 0)){
      railLinesTravelled.push(railLines[x]);
        //if(railLinesTravelled[x - 1] == railLinesTravelled[x]) {
        //railLinesTravelled.pop();
        console.log('lines trvelled ' + railLinesTravelled);
        //}
    }
  }

  for(var y = 1; y < railLinesTravelled.lenghth; y++) {
      if( railLinesTravelled[y -1] === railLinesTravelled[y]) {
        railLinesTravelled.splice( y, 1 );
      }
  }
    console.log('rail lines travelled ' + railLinesTravelled);


  //if ((alemein.indexOf(origin) >= 0) || (alemein.indexOf(destination) >= 0)){
  //railLines.push(alemein);
  //}
  //if ((glenWaverly.indexOf(origin) >= 0) || (glenWaverly.indexOf(destination) >= 0)){
  //railLines.push(glenWaverly);
  //}
  //if ((sandringham.indexOf(origin) >= 0) || (sandringham.indexOf(destination) >= 0)){
  //railLines.push(sandringham);
  //}
  //console.log(railLines);
  //if(railLines.length > 1){
  //console.log('number of lines travelled ' + railLines.length);
  //}


//search array, find match for origin, find match for destination

var startJourney = alemeinOuter.indexOf(origin);
var endJourney = alemeinOuter.indexOf(destination);
var n = Math.abs(startJourney - endJourney);
console.log(n);
console.log(startJourney + ', ' + endJourney);
var stations = [];
  if(startJourney > endJourney){
    for (var i = startJourney; i >= endJourney; i--){
      stations.push(alemeinOuter[i]);
    }
  }
  if(startJourney < endJourney){
    for (var i = startJourney; i <= endJourney; i++){
      stations.push(alemeinOuter[i]);
    }
  }
    console.log(stations);
