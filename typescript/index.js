var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  datatypes in typeScript
//string
var firstName = "mariam";
console.log(typeof firstName);
// number
var age = 23;
console.log(typeof age);
//  boolean
var isLogin = true;
console.log(typeof isLogin);
// array of string
var arr = ["mariam", "esraa", "fatma"];
// array of string and number
var arr_2 = ["mariam", 23, 77, "fatma"];
//array of type tuple
var arrOfTuple = [5, true, "hello world "];
//object
var user = {
    id: "1",
    name: "mariam",
    email: '',
    pass: ''
};
console.log(typeof user);
user.email = "mariam@gmail.com";
console.log(user.email);
var car = {
    id: "1",
    type: 'BMW',
    color: 'blue',
    count: 10,
};
console.log(car);
var profile = {
    id: '1',
    name: "mariam",
    email: "mariam111@gmail.com"
};
console.log(profile);
// function
function sum(x, y) {
    var z = x + y;
    return z;
}
sum(10, 15);
function mix(x) {
    console.log(x);
    return x;
}
mix(10);
mix("mariam zahran");
// class
var Persons = /** @class */ (function () {
    function Persons(id, f_Name) {
        this.id = id;
        this.f_Name = f_Name;
        console.log(this.id);
    }
    return Persons;
}());
var person = new Persons("1", "mariam");
console.log(person);
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width) {
        return _super.call(this, width, width) || this;
    }
    return Square;
}(Rectangle));
var mySq = new Square(10);
console.log(mySq.getArea());
