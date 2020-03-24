"use strict";
exports.__esModule = true;
//I created my files using the terminal and then just opened the folder
//in code and started editing. My biggest debugging issue was forgetting
//that export wasn't supposed to be at the bottom of the page and I 
//kept trying to make the class above it.  Then I finally went back
//and re-read and was like, "oh, yeah, it's all just in one place."
//The rest of astronaut and cargo was just remembering to add the types
//while writing the properties and constructor.
var Astronaut = /** @class */ (function () {
    function Astronaut(massKg, name) {
        this.massKg = massKg;
        this.name = name;
    }
    return Astronaut;
}());
exports.Astronaut = Astronaut;
