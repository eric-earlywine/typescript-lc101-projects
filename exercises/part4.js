var kilometersToMars = 225000000;
var kilometersToTheMoon = 384400;
// The variables that are commented out will be moved into the Spacecraft class
// let spaceCraft: string = "Space Shuttle";
// let speedMph: number = 17500;
// let milesPerKilometer: number = 0.621;
// This function will also be moved into the Spacecraft class
// function getDaysToLocation(kilometersAway: number): number {
//   let milesAway: number = kilometersAway * milesPerKilometer;
//   let hours: number = milesAway / speedMph;
//   return hours / 24;
// }
// Define your Spacecraft class here:
var Spacecraft = /** @class */ (function () {
    function Spacecraft(name, speedMph) {
        this.milesPerKilometer = 0.621;
        this.name = name;
        this.speedMph = speedMph;
    }
    Spacecraft.prototype.getDaysToLocation = function (kilometersAway) {
        var milesAway = kilometersAway * this.milesPerKilometer;
        var hours = milesAway / this.speedMph;
        return hours / 24;
    };
    return Spacecraft;
}());
var spaceShuttle = new Spacecraft('Determination', 17500);
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToMars) + " to reach Mars");
console.log("It will take " + spaceShuttle.name + " " + spaceShuttle.getDaysToLocation(kilometersToTheMoon) + " to reach the moon.");
// Create an instance of the class here:
// Print two outputs - one for the trip to Mars and one for the trip to the moon.
