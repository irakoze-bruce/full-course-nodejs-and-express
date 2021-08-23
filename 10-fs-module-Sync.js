const fs = require("fs")

const fst = fs.readFileSync("./content/fst.txt", 'utf-8')
const scnd = fs.readFileSync("./content/scnd.txt", "utf-8")


const wf = fs.writeFileSync("./content/result.txt", `result:${fst},${scnd}`)

console.log(wf)