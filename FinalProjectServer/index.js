const express = require("express");
const app = express();
const { client } = require("./db/index");
const cors = require("cors");

app.use(express.json());
app.use(cors());
client.connect();

app.use("/api/users", require("./api/users"));
app.use("/api/products", require("./api/products"));
app.use("/auth", require("./api/auth"));
app.use("/api/cart", require("./api/cart.js"));
app.use("/api/orders", require("./api/orders.js"));

const pathToDist = __dirname + "../FinalProject/dist";
app.use(express.static(pathToDist));

app.listen(6800, () => {
  console.log("App is running at port 6800");
});
