var ws = require('ws')

var url = 'ws://127.0.0.1:9090'
var sock = new ws(url)

sock.on('open',()=>{
	console.log('connect success ')
	sock.send('hello');
})

sock.on('error',(err)=>{
	console.log('err:',err)
})

sock.on('close',()=>{
	console.log('close')
})

sock.on('message',(data)=>{
	console.log('data:',data)
})