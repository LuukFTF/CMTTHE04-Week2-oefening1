"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        this.name = "bubble";
        this.element = document.createElement(this.name);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.click(); });
        this.initLocation();
        console.log(this.name + " created");
    }
    Bubble.prototype.click = function () {
        this.kill();
    };
    Bubble.prototype.kill = function () {
        this.element.remove();
    };
    Bubble.prototype.initLocation = function () {
        this.posx = Math.random() * (window.innerWidth - this.element.clientWidth);
        this.posy = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        this.name = "fish";
        this.element = document.createElement(this.name);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.click(); });
        this.initColor();
        this.initLocation();
        console.log(this.name + " created");
    }
    Fish.prototype.click = function () {
        this.kill();
    };
    Fish.prototype.kill = function () {
        this.element.classList.add("dead");
    };
    Fish.prototype.initLocation = function () {
        this.posx = Math.random() * (window.innerWidth - this.element.clientWidth);
        this.posy = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    Fish.prototype.initColor = function () {
        this.huedeg = Math.random() * 360;
        this.element.style.filter = "hue-rotate(" + this.huedeg + "deg)";
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        this.name = "Game";
        this.elementAmount = 100;
        this.elementAmountShark = 10;
        for (var i = 0; i < this.elementAmount; i++)
            new Fish();
        for (var i = 0; i < this.elementAmount; i++)
            new Bubble();
        for (var i = 0; i < this.elementAmountShark; i++)
            new Shark();
        console.log(this.name + " created");
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Shark = (function () {
    function Shark() {
        var _this = this;
        this.name = "shark";
        this.element = document.createElement(this.name);
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.element.addEventListener("click", function () { return _this.click(); });
        this.initColor();
        this.initLocation();
        console.log(this.name + " created");
    }
    Shark.prototype.click = function () {
        this.kill();
    };
    Shark.prototype.kill = function () {
        this.element.remove();
    };
    Shark.prototype.initLocation = function () {
        this.posx = Math.random() * (window.innerWidth - this.element.clientWidth);
        this.posy = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + this.posx + "px, " + this.posy + "px)";
    };
    Shark.prototype.initColor = function () {
        this.huedeg = Math.random() * 360;
        this.element.style.filter = "hue-rotate(" + this.huedeg + "deg)";
    };
    return Shark;
}());
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