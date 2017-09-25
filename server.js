

const express = require('express');
const bodyParser= require('body-parser');
const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
console.log('Welcome to node');

//app.listen(3000 ,()=> {
  //  console.log('listening on 3000');
  //});

  var port =  process.env.OPENSHIFT_NODEJS_PORT || 8080;   // Port 8080 if you run locally
  var address =  process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally
  app.listen(port, address);

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
    // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
  });


  app.post('/addition', (req, res) => {
    console.log(req.body.input1);
    console.log(req.body.input2);


    var a = parseInt(req.body.input1);
    var b = parseInt(req.body.input2) ;
   
    var result=a+b;
    console.log(result);
    res.render('index.ejs', {sum: result})
  });

  app.post('/subtraction', (req, res) => {
    console.log(req.body.input1);
    console.log(req.body.input2);


    var a = parseInt(req.body.input1);
    var b = parseInt(req.body.input2) ;
   
    var result=a-b;
    console.log(result);
    res.render('index.ejs', {sum: result})
  });


  app.post('/multiplication', (req, res) => {
    console.log(req.body.input1);
    console.log(req.body.input2);


    var a = parseInt(req.body.input1);
    var b = parseInt(req.body.input2) ;
   
    var result=a*b;
    console.log(result);
    res.render('index.ejs', {sum: result})
  });

  app.post('/division', (req, res) => {
    console.log(req.body.input1);
    console.log(req.body.input2);


    var a = parseInt(req.body.input1);
    var b = parseInt(req.body.input2) ;
   
    var result=a/b;
    console.log(result);
    res.render('index.ejs', {sum: result})
  });
