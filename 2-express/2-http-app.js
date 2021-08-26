const http = require("http")
const { readFileSync } = require("fs")

const homePage = readFileSync("./2-express/navbar-app/index.html")
const homeCss = readFileSync("./2-express/navbar-app/styles.css")
const homeImage = readFileSync("./2-express/navbar-app/logo.svg")
const homeLogic = readFileSync("./2-express/navbar-app/browser-app.js")



const server = http.createServer((req, res) => {
  const url = req.url

  if (url === '/') {
    res.writeHead(200, { "content-type": "text/html" })
    res.write(homePage)
    res.end()
  }

  else if (url === '/about') {
    res.writeHead(200, { "content-type": "text/html" })
    res.write('<h1>About Page</h1>')
    res.end()
  }

  else if (url === '/styles.css') {
    res.writeHead(200, { "content-type": "text/css" })
    res.write(homeCss)
    res.end()
  }


  else if (url === '/logo.svg') {
    res.writeHead(200, { "content-type": "image/svg+xml" })
    res.write(homeImage)
    res.end()
  }


  else if (url === '/browser-app.js') {
    res.writeHead(200, { "content-type": "text/javascript" })
    res.write(homeLogic)
    res.end()
  }

  else {
    res.writeHead(404, { "content-type": "text/html" })
    res.write('<h1>Page not Found!</h1>')
    res.end()
  }


})

server.listen(8000)