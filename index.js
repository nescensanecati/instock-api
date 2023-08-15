const express = require("express"); //create an express app, used to create a server and handle http requests
const app = express(); //is an instance of express

require("dotenv").config();
const PORT = process.env.PORT;

const cors = require("cors"); //this module enables Cross-Origin Resourse Sharing to allow different origins (domains) to access our server resources

// app.use(cors()) enable cors, this configures the CORS middleware to allow requests from any origin (*)
app.use(
  cors({
    origin: "*",
  })
);

//This middleware parses incoming JSON data from requests and makes it available in req.body for easy access.
app.use(express.json());

// GET method route
app.get("/", (req, res) => {
  res.send("GET request to.. the server is running");
});

//start the server - listen for connection on the given path (all paths on port 8080)
app.listen(PORT, () => {
  console.log("Server running on PORT " + PORT);
});
