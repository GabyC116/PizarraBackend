import express, { application } from "express";
import http from "http";
import cors from "cors";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";

const app = express();
const server = http.createServer(application);
const io = new SocketServer(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("new user connected:", socket.id);
});

app.use(cors());
app.use(morgan("dev"));

server.listen(4500);
console.log("server on port", 4500);
