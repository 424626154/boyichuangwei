console.log(Math.PI)

function randomNum( start,end){
	var num = start+(end-start)*Math.random();
	console.log(Math.floor(num))
}

randomNum(1,91);

console.log(Math.sin(Math.PI/3));
console.log(Math.cos(Math.PI/3));
console.log(Math.tan(Math.PI/3));

console.log(Math.asin(0.5));
console.log(Math.acos(0.5));
console.log(Math.atan(0.5));

function degresToR(degree){
	return (degree/180)*Math.PI
}

function rToDegree(r){
	return (r/Math.PI)*180;
}
var r = degresToR(90)
console.log(r)
console.log(rToDegree(r))

console.log(Math.atan2(1,1))

console.log(Math.sqrt(9))

var nums = [1,2,3,4]

nums.push(5)
console.log('nums:',nums.length)

for(var key in nums){
	console.log(nums[key])
}

console.log('indexof:',nums.indexOf(1))

nums.splice(3,2)
console.log(nums)


var nums1 = [1,3,23,434,545,63,0,9]
nums1.sort(function(lhs,rhs){
	if(lhs < rhs){
		return -1;
	}else if(lhs > rhs){
		return 1;
	}else{
		return 0;
	}
})
console.log('nums1 sort:',nums1)

nums1.sort(function(lhs,rhs){
	if(Math.random() < 0.5){
		return -1;
	}else{
		return 1;
	}
})

console.log('nums sort random:',nums1)


var obj = {
	a:1,
	b:2,
	c:3
}

for(var key in obj){
	console.log(key,obj[key]);
}

delete obj['c'];

for(var key in obj){
	console.log(key,obj[key]);
}

var str = 'hello 博毅创为'
console.log(str.length)
console.log(str.indexOf('ll'))
console.log(str.replace('hello','你好'))

console.log('aBc'.toLowerCase())
console.log('aBc'.toUpperCase())

randomNum(100,1000);




