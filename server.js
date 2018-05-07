const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const reload = require("reload");
const path = require("path");
const api = require('./api');
const app = express();

app.set('port',process.env.PORT || 3000); // handling non static port variable

app.use(bodyParser.urlencoded({extended : true})); // to allow nested object extented is set true
app.use(bodyParser.json());// to catch incoming data

/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/DevDB',{
  useMongoClient : true
});*/
//routes(app);

app.engine('html', require('ejs').renderFile);//it is done to make html as view engine otherwise it wouldn't create module for html
app.set('view engine', 'html');
app.set('views',path.join(__dirname+'/view'));

app.use(express.static(path.join(__dirname+'/')));
//it is a middleware(library) which will provide access to file or folder and return control back to express to hold data
app.use(require(path.join(__dirname+'/routes/index')));
app.use('/api',api)
/*app.get('/',(req,res)=>
    //res.send(`Nodes and express server is running on port ${app.get('port')}`)
    res.sendFile(path.join(__dirname+'/view/index.html'))
);*/

app.listen(app.get('port'), ()=> //listen is callback function
  console.log(`your server is running on port ${app.get('port')}`)
);

reload(app);