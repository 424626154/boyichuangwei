// setInterval(function(){
// 	console.log('setInteval')
// },1000);

// setTimeout(function(){
// 	console.log('setTimeout')
// },1000);

console.log(process.pid);
console.log(process.version);
console.log(process.platform);
console.log(process.title);
console.log(process.argv);
console.log('~~~~~~~~~~~~~~~~~~~~');
var argv = process.argv.length;
if(argv >= 3){
	for(var i = 0 ; i < argv;i++){
		if (i > 1){
			console.log(process.argv[i])
		}
	}
}


// console.log(process.execPath);
// console.log(process.env);

process.on('exit',function(){
	console.log('now node exit!!!');
})


process.on('uncaughtException', function(err) {
	console.log("uncaughtException called ", err);
});

// process.chdir('/Users/bingbing/Documents/boyichuangwei');
console.log(process.cwd());


process.nextTick(function(){
	console.log('nextTick')
});

notfunction_text();
console.log('after notfunction_text')





