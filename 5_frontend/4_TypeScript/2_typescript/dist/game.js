"use strict";
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["down"] = 1] = "down";
    directions[directions["left"] = 2] = "left";
    directions[directions["right"] = 3] = "right";
})(directions || (directions = {}));
function doSomething(keyPressed) {
    if (keyPressed === directions.up) {
    }
}
doSomething(directions.up);
doSomething(directions.down);
console.log(directions.up);
console.log(directions.down);
console.log(directions.left);
console.log(directions.right);
