console.log("============================CODE: 002===============================");
const SerialPort = require('serialport');
const porNumber = process.argv[2];
console.log("Port at : " + porNumber);
const mord = new SerialPort(porNumber,{
	baudRate : 57600// 115200 
});

// const moment = require('moment-timezone'); //config timezone
// moment().tz("Asia/Bangkok").format();
var fs = require('fs');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
	delimeter : '\r\n' 
});

mord.pipe(parser);
mord.on('open', ()=>{
	console.log('Connected at : '+ porNumber);
	let timeOut = 3000;
	setTimeout(()=>{
		mord.write('1', (err)=>{
			if(err)
				console.log(err);
			else
				console.log('Node connected,\nyou now may access the GUI with localhost/'+ portListen);
		})
	}, timeOut)
});

parser.on('data', (data)=>{
	
	let parsingResult = parsingRawData(data,",");
	console.log(parsingResult);
	console.log(data);
	let parseResult = parsingRawData(data, ",");
		if (parseResult[0] == " 69 " ){
			// socket.emit('socketData', {dataMuncul : parseResult});//membuat objek untuk menaruh data parsing
			socket.emit('socketData', console.log(parseResult));
		}

})
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');

app.use(express.static(path.join(__dirname,'www')));
const portListen = 8080;
server.listen(portListen);

let clientNum = 0;
io.on('connection', (socket)=>{
	clientNum++;
	console.log('A new client just connected..\n' + 
				'Total connected : ' + clientNum);

	parser.on('data', (data)=>{
		let parseResult = parsingRawData(data, "*");
		if (parseResult[0] == " 69 "){
			socket.emit('socketData', {dataMuncul : parseResult});//membuat objek untuk menaruh data parsing
				console.log(parseResult);
		}
	});

	socket.on('disconnect', ()=>{
		clientNum--;
		console.log('Client just disconn..');
	});

	socket.on('savingData', function parsingRawData(data, delimeter){
		console.log('Saving Data')
		logger.write("Date Time : "+ moment().format("DD-MM-YYYY_HH-mm-ss") +"\r\n");
		logger.write("Head || Humi || Roll || Yaw || Pitch || Gas || HDOP || Lintang \t Bujur " + "\r\n");
		logger.write("[========================================================================]" + "\r\n");
        logger.write(hasil + '\r\n\n');
		logger.write("[========================================================================]" + "\r\n");
	});
});
let hasil;
function parsingRawData(data, delimeter){
	
	hasil = data.toString().replace(/(\r\n|\n\r)/gm,"").split(delimeter);
	return hasil;
}
var logger = fs.createWriteStream('save.txt' , {
  flags : 'a'
});

