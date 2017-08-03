console.log(100);
console.log(10.2);
console.log(true);
console.log(false);

var a = 1;
console.log(a);
a = 2;
console.log(a)
a = true;
console.log(a)
var b;
console.log(b);
b = [];
console.log(b)
b = [1,2,3,4]
console.log(b)
for (var i = b; i <= b.length ; i++) {
	console.log(b)
}

var list_table = {};
list_table = {
	isb:false,
	isn:5
}
console.log(list_table)
console.log(list_table.isb)
console.log(list_table.isn)
console.log(list_table['isb'])
console.log(list_table['isn'])

testFunc = function(par){
	return (par);
}

var test = testFunc(11);
console.log(test);

function testFuncName(){
	console.log('testFuncName')
}

testFuncName();

var testStr = '博毅创为'
console.log(testStr)

var b = 3;
var c = b;
c = 4;
console.log(b);

b = [1,2,3,4,5];
c = b;
c[0] = 100;
console.log(b)

var Test = {
	testName:function(){
		console.log('testNameFunc')
	},
	testFunc:function(){
		console.log('testFuncFunc')
	},
	age:10,
	sex:-1,
	name:'Test',
}

Test.testName();
Test.testFunc();
console.log(Test.name);


var Cmd = [
	function(){
		var myTest = 10;
		console.log('hello');
	}
];
Cmd[0]()

var aPStr = {
	0:'aPStr'
}

var bPStr = {
	0:'bPstr'
}
console.log(aPStr);
aPStr = bPStr;
console.log(aPStr);
console.log(bPStr);




