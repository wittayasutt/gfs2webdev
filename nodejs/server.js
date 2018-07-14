var app = require('express')()
var path = require('path')

var port = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.send('<h1>Bello</h1>')
})

app.get('/page1', function(req, res) {
    res.sendFile(path.join(__dirname+'/page.html'));
})

/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function() {
	console.log('Starting node.js on port ' + port)
})
