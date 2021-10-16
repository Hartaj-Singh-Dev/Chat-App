const app = require("express")();
const server = require('http').createServer(app);

const io = require("socket.io")(server);
const PORT = process.env.port || 3000

io.on("connection",(socket)=>{
	console.log(socket);

	socket.on("chat" ,(payload)=>{
		
	})
})


server.listen(PORT)