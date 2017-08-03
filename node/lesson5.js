var utils = require("./lesson5_util");
console.log(utils);
var num = utils.randomInt(10,20);
console.log(num);


function testFunc(name,sex){
	this.name = name;
	this.sex = sex;
}
var obj = {};
testFunc.call(obj,'xiaoming',10)
console.log(obj);

var xiaohong = {
	name:'xiaohong',
	testFunc:function(){
		console.log(this);
	},
	testBind:function(){
		console.log(this);
	}.bind(4),
}

xiaohong.testFunc();
xiaohong.testBind();

var func = function(){
	console.log(this);
}.bind(xiaohong);
func();

func = function(){
	console.log(this);
}

func = func.bind(xiaohong);
func();
func.call(4);


xiaohong.testFunc.call(4);
console.log('##################')
function person(name,age){
	this.name = name;
	this.age = age;
}

person.prototype.testFunc = function(){
	console.log(this)
}

var p1 = new person('a',10);
console.log(p1)
var p2 = new person('b',20);
console.log(p2)
p1.testFunc();
p2.testFunc();

var funcTemp = function(){
	console.log('funcTemp')
}

console.log(funcTemp.prototype);

funcTemp.prototype.testFunc = function(){
	console.log('testFunc',this);
}
funcTemp.prototype.testFunc2 = function(){
	console.log('testFunc2')
}

var data = new funcTemp();
console.log(data.__proto__);
console.log(funcTemp.prototype);

data.name = 'funcTemp name';
data.__proto__.testFunc();

data.testFunc();
data.__proto__.testFunc.call(data);

data.testFunc = function(){
	console.log('testFunc',this);
}

data.testFunc();


function Point(){
	this.xpos = 0;
	this.ypos = 0;
}


Point.prototype.setPos = function(x,y){
	this.xpos = x;
	this.ypos = y;
}

Point.prototype.getYPos = function(){
	return this.ypos;
}


var p1 = new Point();
var p2 = new Point();

p1.setPos(1,2);
p2.setPos(3,4);

console.log(p1.getYPos());
console.log(p2.getYPos());


var Person = function() {};
Person.prototype.setName = function(name) {
    this.name = name;
    console.log("setName called");
};
 
Person.prototype.setAge = function(age) {
    this.age = age;
};
 
Person.prototype.testFunc = function() {
    console.log("person testFunc");
};


var Man = function(){};
var Super = function(){};
Super.prototype = Person.prototype;
Man.prototype = new Super();

Man.prototype.setSex = function(sex){
	this.sex = sex;
}

Man.prototype.tetsFunc = function(){
	Person.prototype.testFunc.call(this);
	console.log('Man testFunc');
}

var m = new Man();
m.setName('xiaoming')
m.setAge(10);
m.setSex(0)
console.log(m)
m.testFunc()

function Class(params) {
    var new_class = function() {};
    // 继承基类的方法
    if (params.extend) {
        var Super = function() {};
        Super.prototype = params.extend.prototype;
        new_class.prototype = new Super();
    }
 
    for(var key in params) {
        if (key == "extend") {
            continue;
        }
        new_class.prototype[key] = params[key];
    }
 
    return new_class;
}
 
var Student = Class({
    extend: Person,
 
    setClass: function(class_num) {
        this.class_num = class_num;
    },
 
    setGrade: function(grade) {
        this.grade =  grade;
    }
});
 
 
var s = new Student();
s.setName("xiaohong");
s.setClass(10);
s.setGrade(2);
console.log(s);































