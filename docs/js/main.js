"use strict";
var Bubble = (function () {
    function Bubble() {
        console.log("Blub... blub...");
        this.popBubble();
    }
    Bubble.prototype.popBubble = function () {
        console.log("Plop!");
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.element = document.createElement("fish");
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.kill(); });
        console.log("Fish was created!");
    }
    Fish.prototype.kill = function () {
        console.log("Aargh!");
    };
    Fish.prototype.move = function () {
        this.posx = Math.random() * window.innerWidth;
        this.posy = Math.random() * window.innerHeight;
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    Fish.prototype.changeColor = function () {
        this.huedeg = Math.random() * 360;
        this.element.style.filter = "hue-rotate(" + this.huedeg + "deg)";
    };
    return Fish;
}());
for (var i = 0; i < 100; i++) {
    var fish = new Fish();
    fish.changeColor();
    fish.move();
}
var Game = (function () {
    function Game() {
        console.log("Game was created!");
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
console.log(greeter.greet());
//# sourceMappingURL=main.js.map