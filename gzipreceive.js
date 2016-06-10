var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var server = http.createServer(function (req,res) {
  var filename = req.headers.filename;
  console.log('File request received ' + filename);
  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename))
    .on('finish', function () {
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.end('Done');
      console.log('File saved ' + filename);
    });
});

server.listen(8080, function () {
  console.log('Server starts at port 8080');
});
