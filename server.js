const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
app = express()
app.use(serveStatic(path.join(__dirname, '/dist')))
app.get('*', (req, res) => {
  res.sendfile('./dist/index.html')
})
const port = process.env.PORT || 8080
app.listen(port)
console.log('server started ' + port)
