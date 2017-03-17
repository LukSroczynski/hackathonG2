const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())

var publicPath = path.resolve(__dirname, 'public')
app.use(express.static(publicPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port)
console.log(`Server started: ${port}`)


