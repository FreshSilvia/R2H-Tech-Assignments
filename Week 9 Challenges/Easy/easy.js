'use strict';
function exercise(exerciseType) {
    return () => `Today's exercise: ${exerciseType}`; 
}
var run = exercise('running');
console.log(run()); // prints "Today's exercise: running"
var swim = exercise('swimming');
console.log(swim()); // prints "Today's exercise: swimming"
