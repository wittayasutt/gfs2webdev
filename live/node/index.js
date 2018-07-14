var app = require('express')()
var path = require('path')

const _ = require('lodash')
const moment = require('moment')

const array = [1, 2, 3]

const a = _.take(array, 2)

var port = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.send('<h1>Bello</h1>')
})

app.get('/page2', function(req, res) {
	res.send('<h1>' + moment().format() + '</h1>')
})

app.get('/page1', function(req, res) {
	res.sendFile(path.join(__dirname + '/page.html'))
})

app.listen(port, function() {
	console.log('Starting node.js on port ' + port)
})
