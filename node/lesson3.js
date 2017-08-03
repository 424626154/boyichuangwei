var a = 0;
for (var i = 1; i <= 100; i++) {
	a += i;
}
console.log(a);

var b = 0 ;
var ii = 1;
do{
	b += ii;
	ii ++;
}while(ii <= 100)
console.log(b);


var c = 0 ;
var j = 0;
do{
	if(j%2 != 0){
		c += j;
	}
	j ++;
}while(j <= 100)
console.log(c);

var d = 0;
for (var i = 0; i < 100; i++) {
	if (i%2 == 0){
		continue;
	}
	d += i;
}
console.log('d:',d);

var e = 0;
for (var i = 0; i < 100; i++) {
	if (i%2 == 0){
		break;
	}
	e += i;
}
console.log('e:',e);


var f = 0;
var i1 = 0;
do{
	i1 ++;
	if (i1%2 == 0){
		continue;
	}
	f += i1;
}while(i1 < 100)
console.log('f:',f);


var k = 0;
var i2 = 0;
do{
	i2 ++;
	if (i2%2 == 0){
		break;
	}
	k += i2;
}while(i2 < 100)
console.log('k:',k);



