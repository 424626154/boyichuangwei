var ws = require('ws');

var server =  new ws.Server({
	host:'127.0.0.1',
	port:9090,
});

server.on('connection',(clientSocket)=>{
	clientSocketListener(clientSocket)
})

server.on('error',(err)=>{
	console.log('err:',err)
})

server.on('headers',(data)=>{
	// console.log('headers:',data)
})

function clientSocketListener(clientSocket){
	console.log('clientSocketListener')
	clientSocket.on('close',()=>{

	})
	clientSocket.on('error',(err)=>{
		console.log('client err:',err)
	})
	clientSocket.on('message',(data)=>{
		console.log('client data:',data)
		clientSocket.send('is server')
	})
}