const express = require("express")

const app = new express()

app.get("/", (req, res) => {
  res.status(200).send("Home page")
})

app.get("/about", (req, res) => {
  res.status(200).send("About page")
})

app.all("*", (req, res) => {
  res.status(404).send("<h1>Resource not found!!</h1>")
})

app.listen(8000, () => {

  console.log("server is listening on 8000............")
})