"use strict";
exports.__esModule = true;
// Part 1: Declare (5) Variables With Type
//let spacecraftName: string = 'Determination';
//let speedMph: number = 17500;
var kilomentersToMars = 225000000;
var kilomentersToTheMoon = 384400;
//let milesPerKilometer: number = 0.621;
// Part 2: Print Days to Mars
/*
let milesToMars: number = kilomentersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars/speedMph;
let daysToMars: number = hoursToMars/24; */
// Code an output statement here (use a template literal):
//console.log(`It will take ${spacecraftName} ${daysToMars} days to reach Mars.`);
// Part 3: Create a Function ("getDaysToLocation")
/*
function getDaysToLocation(kilometersAway: number): number {
    return ((kilometersAway*milesPerKilometer)/speedMph)/24;
}; */
// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
//console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilomentersToMars)} days to reach Mars.`);
//console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilomentersToTheMoon)} days to reach the Moon.`);
// Part 4: Create a Spacecraft Class
var Spaceraft = /** @class */ (function () {
    function Spaceraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spaceraft.prototype.getDaysToLocation = function (kilometersAway) {
        return ((kilometersAway * this.milesPerKilometer) / this.speedMph) / 24;
    };
    Spaceraft.prototype.printDaysToLocation = function (location) {
        console.log(this.name + " would take " + this.getDaysToLocation(location.kilometersAway) + " days to get to " + location.name + ".");
    };
    return Spaceraft;
}());
// Create an instance of the class here:
var spaceShuttle = new Spaceraft('Determination', 17500);
// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilomentersToMars) + " days to reach Mars.");
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilomentersToTheMoon) + " days to reach the Moon.");
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.
// Add the printDaysToLocation function to the Spacecraft class.
// Paste in the code from step 6 here:
