var express = require('express')
var path = require('path')

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 8080

var router = express.Router()

router.get('/', function (request, response) {
  const serverTime = new Date().toLocaleString()
  const clientIp = request.connection.remoteAddress
  const serverIp = server.address().address
  response.render('index', { clientIp, serverTime, serverIp })
})
app.use('/', router)

const server = app.listen(PORT, function () {
  console.log('Listening on port ' + PORT)
})
