var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require("body-parser");
var favicon = require('serve-favicon');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname + '/ftlogo.ico')));

var mysql = require('mysql');
var con = mysql.createConnection({
     host: "fm14lbfikbj76n6.c1rovcfhsccw.eu-west-2.rds.amazonaws.com",
     user: "dbadmin",
     password: "password",
     database: "ftratings"
});

con.connect(function(err){
	if(err) throw err;
});


app.get('/',function(req,res){
     res.sendFile(path.join(__dirname,'index.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit',function(req,res){
  var subject=req.body.subject;

  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }

  var sql = "INSERT INTO ratings(ipaddress,rating) VALUES ('"+ip+"', '"+subject+"')";

  con.query(sql, function (err, result) {

    if (err) throw err;

   console.log("1 record inserted");



  res.sendFile(path.join(__dirname, '/Redirect.html'));




  });
})

app.listen(8080);


