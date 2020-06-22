const express = require("express");
const app = express();
const PORT = 5000;
//path sets us up for paths being used not on our machine i.e. heroku
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client"));
//below is client route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/index.html"));
});
//below is api route. The "/" is the endpoint it needs t hit
app.get("/api", (req, res) => {
  //what we get back is json data
  res.json({ name: "Sosuke" });
});
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
