var net = require('net');

var server = net.createServer((clinetSock)=>{
	// console.log('client sockt connect');
	clinetSock.setEncoding('utf-8');
	// clinetSock.setEncoding('hex');
	clinetSock.on('data',(data)=>{
		console.log('data:',data);
	})
});

server.listen(9090,()=>{
	console.log('server lesten 9090------');
})

server.on('connection',(clinetSock)=>{
	console.log('client sockt connect');
})


server.on('close',()=>{
	console.log('client sockt close');
})


server.on('error',(err)=>{
	console.log('client sockt err');
})


// server.close()
// server.unref();