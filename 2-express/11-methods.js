const express = require('express')
const app = express()

const { people } = require("./data")

app.use(express.static("./2-express/methods-public"))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.post("/login", (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  res.status(401).send("Please provide credentials")
})

app.post("/api/people", (req, res) => {

  const { name } = req.body
  if (!name) {
    return res.status(400).json({ success: false, mgs: 'please provide name value' })
  }
  res.status(201).send({ success: true, person: name })

})

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people })
})



app.listen(8000, () => {
  console.log("server is listening on 8000");
})




