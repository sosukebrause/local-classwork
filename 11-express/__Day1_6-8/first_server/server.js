//we need express to ... access the express library
//the server is open on a port. Port number must be defined
//`npm init -y`
//`npm i express`
//npm install -g nodemon
const express = require("express");
const app = express();
//path sets us up for paths being used not on our machine i.e. heroku
const path = require("path");
const PORT = 3000;
//app will listen on port number defined

//must tell server this for URL encoding for arrays, brackets etc.
app.use(express.urlencoded({ extended: true }));
//extended is to match up to browser security standards
app.use(express.json());
//to receive data from json and send it back out, in different formats
app.use(express.static("client"));
//this is relating the data to the client

//setting up the client path or route for the GET request
app.get(`/`, (req, res) => {
  res.sendFile(path.join(__dirname + "../serve_client/client/index.html"));
});
//below is api route. The "/" is the endpoint it needs t hit
app.get("/api", (req, res) => {
  //what we get back is json data
  res.json({ name: "Sosuke" });
});

app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
//`control + c` to exit
//npm install -g nodemon
//`nodemon server.js`
//another way is: app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))
