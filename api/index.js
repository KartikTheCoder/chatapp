const http = require("http");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const socket = require("./socket");
const userController = require("./controller/user");
const messageController = require("./controller/messageController");
const connectMongoDB = require("./config/db");
app.use("/user", userController);
app.use("/message", messageController);

const server = http.createServer(app);

connectMongoDB()
  .then(() => {
    server.listen(5000, () => {
      socket(server);
      console.log("server working");
    });
  })
  .catch((err) => console.log(err));
