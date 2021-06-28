import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from 'http';
import { Server } from "socket.io";
import logger from "./logger.js" 


dotenv.config({path:"config.env"})
const app = express()

const host = process.env.HOST
const origin = process.env.ORIGIN
const port = process.env.PORT

const httpServer = createServer(app)

const io = new Server(httpServer , {
	cors:({origin: "http://localhost:3000" ,credentials:true})
})

app.get('/',(req,res)=>{
	res.status(200).json({Message:"Server is Up and running well"})
})

httpServer.listen(8000  , ()=>{logger.info("Server is listning")})