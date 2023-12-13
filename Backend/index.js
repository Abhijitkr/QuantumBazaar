const express = require("express");
const server = express();
const mongoose = require("mongoose");
const productsRouters = require("./routes/Products");

server.use(express.json());
server.use("/products", productsRouters.router);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/QuantumBazaar");
  console.log("database connected");
}

server.get("/", (req, res) => {
  res.json({ status: "success" });
});

server.listen(8080, () => {
  console.log("server started");
});
