

const express = require('express');
const bodyParser= require('body-parser');
const app = express();



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
console.log('Welcome to node');

//app.listen(8080 ,()=> {
  //  console.log('listening on 8080');
  //});




    // [START server]
    // Start the server
   app.listen(process.env.PORT || 8080, () => {
      const port = server.address().port;
      console.log(`App listening on port ${port}`);
    });
    // [END server]


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
