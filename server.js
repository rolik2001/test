//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var async = require('async');
var express = require('express');
var hbs = require('hbs');


var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));
router.set('views', path.join(__dirname, 'views'));
router.set('view engine', 'hbs');

var messages = [];
var sockets = [];


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Chat server listening at", addr.address + ":" + addr.port);
});

router.get('/time',(req,res)=>{
    var time = new Date().toUTCString();
    res.render('main', {
     date: time
  });
});


router.get('/test',(req,res)=>{
  console.log(req.query)
  req.query.StartTime = parseInt(req.query.StartTime)
  req.query.ServerTime = new Date().getTime();
  res.send(req.query);
});