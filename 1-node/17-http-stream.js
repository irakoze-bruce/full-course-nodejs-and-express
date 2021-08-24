const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf-8')
  // res.end(text)

  const fileStream = fs.createReadStream('./content/big.txt', "utf8")

  fileStream.on("open", () => {
    fileStream.pipe(res)
  })

  fileStream.on("error", () => {
    res.end(err)
  })
})


server.listen(8000)