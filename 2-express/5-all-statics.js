const express = require("express")
const path = require("path")
const app = express()


app.use(express.static("./public"))


// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, './2-express/navbar-app/index.html'))
//         ============================================
//                                      adding to static assets
// })


app.all("*", (req, res) => {
  res.status(404).send("<h1>resource not found</h1>")
})
app.listen(8000, () => {
  console.log("server is listening on 8000.......");
})