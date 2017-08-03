var net = require('net');

var socket = net.connect(9090,()=>{
	// console.log('client connect socket')
});

socket.on('connect',()=>{
	console.log('client connect socket')
	socket.write('is client','utf8')
})

socket.on('data',()=>{
	console.log('client data socket')
})

socket.on('error',(err)=>{
	console.log('client err socket',err)
})


socket.on('close',()=>{
	console.log('client close socket')
})

socket.on('end',()=>{
	console.log('client end socket')
})

