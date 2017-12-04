

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
console.log('PT Planner Ready');

// sub raillines originating from richmond (index 0 is next station to richmond)

var alemeinOuter = ['Alemein', 'Glenferrie', 'Hawthorn', 'Burnley', 'East Richmond'];
var alemeinInner = ['Flinders Street'];
var glenWaverlyOuter = ['Glen Waverly', 'Tooronga', 'Kooyong'];
var glenWaverlyInner = ['Flagstaff', 'Melbourne Central', 'Parliament'];
var sandringhamOuter = ['Sandrigham', 'Windsor', 'Prahran', 'South Yarra'];
var sandringhamInner = ['Southern Cross'];
var richmond = ['Richmond'];

var alemein = ['Flinders Street', 'Richmond', 'East Richmond', 'Burnley', 'Hawthorn', 'Glenferrie', 'Alemein' ];
var glenWaverly = ['Flagstaff', 'Melbourne Central', 'Parliament', 'Richmond', 'Kooyong', 'Tooronga', 'Glen Waverly'];
var sandringham = ['Southern Cross', 'Richmond', 'South Yarra', 'Prahran', 'Windsor', 'Sandringham'];

var railLines = [alemein, glenWaverly, sandringham];
var oneRaiLine = [];

var subRailLines = [alemeinInner, alemeinOuter, glenWaverlyInner, glenWaverlyOuter, sandringhamInner, sandringhamOuter];

var railLinesTravelled = [];
var oneLineTest = 0;

//var origin = 'Flinders Street';
//var origin = 'Burnley';
var origin = 'East Richmond';
//var origin = 'Glenferrie';

//var origin = 'Melbourne Central';
//var origin = 'Tooronga';

//var origin = 'Southern Cross';
//var origin = 'Windsor';

//var origin = 'Richmond';

//var destination = 'Flinders Street';
//var destination = 'Glenferrie';

//var destination = 'Flagstaff';
//var destination = 'Kooyong';

var destination = 'Southern Cross';
//var destination = 'Windsor';

//var destination = 'Richmond';

// When origin is same as destination
console.log('');
console.log(alemein);
console.log(glenWaverly);
console.log(sandringham);
console.log(' ');

console.log('Origin: ' + origin);
console.log('Destination: ' + destination);
console.log('');
console.log('');

if( origin == destination) {
  alert('Get off train !!');
}

//truncate total lines to give actual journey
function actualJourney(railLinesTravelled) {

  var startJourney = railLinesTravelled.indexOf(origin);
  var endJourney = railLinesTravelled.indexOf(destination);
  var n = Math.abs(startJourney - endJourney);
    var journey = [];
    if(startJourney > endJourney){
      for (var i = startJourney; i >= endJourney; i--){
        journey.push(railLinesTravelled[i]);
      }
    }
    if(startJourney < endJourney){
      for (var j = startJourney; j <= endJourney; j++){
        journey.push(railLinesTravelled[j]);
      }
    }

  var joinJouney = journey.join( '  --->  ');
  console.log(joinJouney);
  return joinJouney;
}

// if origin and destination on same line

for(var x = 0; x < railLines.length; x++) {
        if ((railLines[x].indexOf(origin) >= 0) && (railLines[x].indexOf(destination) >= 0)) {
          railLinesTravelled = railLines[x];
          oneLineTest = 1;
        }
}

actualJourney(railLinesTravelled);

// if not on same line which arrays?

if(oneLineTest === 0){
var m = 0;
for(var x = 0; x < subRailLines.length; x++) {
      railLinesTravelled = subRailLines[x];
          if (subRailLines[x].indexOf(origin) >= 0) {
            railLinesTravelled.slice(0, subRailLines[x].length);
          m = subRailLines[x].length;
                x = subRailLines.length;
          }
}
railLinesTravelled = railLinesTravelled.concat(richmond);

for(var x = 0; x < subRailLines.length; x++) {
          if (subRailLines[x].indexOf(destination) >= 0) {
              railLinesTravelled = railLinesTravelled.concat(subRailLines[x].reverse());
              var w = subRailLines[x].length;
          x = subRailLines.length;
          }
        }

actualJourney(railLinesTravelled);
}
