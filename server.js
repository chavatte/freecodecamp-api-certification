const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
const apiRoutes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use("/api", apiRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, host, () => {
  console.log(`Servidor rodando em ${host}:${port}`);
});
