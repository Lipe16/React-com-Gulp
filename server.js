const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/')))
app.listen(8080)

console.log("Running at Port 8080")