const express = require("express");

const app = express();
const port = 5000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const products = require("./products");

app.use(express.static("public"));

app.use("/products", products);

app.get("/", (req, res) => {
  res.send("Teste");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});
