const express = require('express')
const path = require('path')
const expressip = require('express-ip')
const ip = require('ip')
const app = express()

app.use(expressip().getIpInfoMiddleware)

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))
const router = express.Router()

router.get('/', function (req, res) {
  const ipInfo = req.ipInfo
  const serverTime = new Date().toLocaleString()
  const clientIp = ipInfo.ip
  const serverIp = ip.address()
  const city = ipInfo.city
  res.setHeader('X-Powered-By', 'Verik Systems')

  res.render('index', { clientIp, serverTime, serverIp, city })
})

app.use(function (req, res, next) {
  res.setHeader('X-Powered-By', 'Veriksystems')
  next()
})
app.use('/', router)

const PORT = 8080
app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
