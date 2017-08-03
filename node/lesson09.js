// var buf = Buffer.alloc(10);
// console.log(buf);
// var buf1 = Buffer.alloc(10,'博毅创为');
// console.log(buf1)
// var buf2 = Buffer.alloc(10,0xff);
// console.log(buf2)
// var buf3 = Buffer.allocUnsafe(10)
// console.log(buf3);

// var buf4 = Buffer.allocUnsafeSlow(10)
// console.log(buf4);

// buf4 = Buffer.from('is boyi');
// console.log(buf4);

// var nums = [1,2,3,4,-1,-2];
// var buf5 = Buffer.from(nums);
// console.log(buf5);

// var buf6 = Buffer.from(buf5);
// console.log('buf6:',buf6);

//LE 小尾 BE 大尾

// var buf7 = Buffer.alloc(10);
// buf7.writeInt32LE(65535,0);
// console.log('buf7',buf7)

// var buf8 = Buffer.alloc(10);
// buf8.writeInt32BE(65535,0);
// console.log('write buf8',buf8)

// var wbuf7 = buf7.readInt32LE(0);
// console.log('read buf7',wbuf7)

// 4个字节的Int为例 4 * 4 = 16;
// 0, 1, 2, 3,| 4, 5, 6, 7, |8, 9, 10, 11, |12, 13, 14, 15
buf = Buffer.alloc(4 * 4);
buf.writeInt32LE(65535, 0);
buf.writeInt32LE(65535, 4);
buf.writeInt32LE(65535, 8);
buf.writeInt32LE(65535, 12);
// console.log(buf);
// buf.swap32();
// 3, 2, 1, 0,| 7, 6, 5, 4, |11, 10, 9, 8, |15, 14, 13, 12
// console.log(buf);

// console.log(buf.readInt32BE(0));
// console.log(buf.readInt32BE(4));
// console.log(buf.readInt32BE(8));
// console.log(buf.readInt32BE(12));



// for(var value of buf.values()){
// 	console.log(value)
// }

// console.log(buf.toString('hex'));
console.log(buf.toJSON());

buf.fill('A');
console.log(buf);
console.log(buf.toString('utf8'));







