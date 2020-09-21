const express = require('express')
const app = express()

// const userAgent = require('express-useragent')

// app.use(userAgent.express())
app.get('/', (req, res) => {
  res.send(req.get('User-Agent'))
})

app.listen(3000, () => console.log('Listen on  port 3000!'))
