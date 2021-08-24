const http = require("http")

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is my home page")

  }
  else if (req.url === "/about") {

    res.end("hello i'm on  about page")
  } else {
    res.end(`  <div>
      <h1>OOpps!!!!!!</h1>
      <p>paga not found</p>
      <a href="/">back to home</a>
    </div>`)
  }
})

server.listen(8000)