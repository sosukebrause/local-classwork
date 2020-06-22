const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`listening at: http://localhost:${PORT}`));

const clientRoutes = require("./client/routes/client-routes.js");
app.use(clientRoutes);

const apiRoutes = require("./client/routes/api-routes");
app.use(apiRoutes);

app.use(express.static("./client/"));
