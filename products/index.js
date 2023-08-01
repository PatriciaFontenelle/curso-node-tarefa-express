const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/add", (req, res) => {
  res.sendFile(`${basePath}/newProduct.html`);
});

router.post("/save", (req, res) => {
    console.log(req.body.id)
    console.log(req.body.product)
});

router.get("/", (req, res) => {
  res.sendFile(`${basePath}/products.html`);
});

module.exports = router;
