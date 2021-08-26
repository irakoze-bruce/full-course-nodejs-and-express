const express = require("express")
const app = express()

const product = require("./data")

app.get("/", (req, res) => {
  res.json(product)
})


app.listen(8000, () => {
  console.log("server is listening on 8000.......");
})