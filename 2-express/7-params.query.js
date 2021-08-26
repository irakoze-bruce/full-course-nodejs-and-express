const express = require('express')
const { products } = require("./data")

const app = express()

app.get("/", (req, res) => {
  res.send('<h1>Home page</h1> <a href="/api/products">Product</a>')
})

app.get("/api/products", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })
  res.json(newProduct)
})

app.get("/api/products/:productID", (req, res) => {

  const { productID } = req.params

  const singleProduct = products.find((product) => {
    return product.id === Number(productID)
  })

  if (!singleProduct) {
    return res.status(404).send("Product is not exist ")
  }
  return res.json(singleProduct)
})



app.listen(8000, () => {
  console.log("server is listening on 8000");
})