const express = require("express");
const app = express();
const path = require("path");
const PORT = 9000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));
const clientRoutes = require("./routes/client-routes");
app.use("/", clientRoutes);

const apiRoutes = require("./routes/api-routes");
app.use(apiRoutes);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
