var express = require("express"); // to start a server
var mongoose = require("mongoose"); // for database
const bodyParser = require("body-parser"); // for getting info
const http = require("http"); // for http
const reload = require("reload"); // auto reload the web page
const path = require("path"); // find the root folder hence resolve path issues
const mongodb = require("mongodb");//.MongoClient;
// Schema path generated
const app = express();
const api = require(path.join(__dirname+'/api'));

const dbConnect = require(path.join(__dirname+'/dbConnect'));


app.set('port',process.env.PORT || 3000); // handling non static port variable

app.use(bodyParser.urlencoded({extended : true})); // to allow nested object extented is set true

app.use(bodyParser.json());// to catch incoming data


//routes(app);

app.engine('html', require('ejs').renderFile);//it is done to make html as view engine otherwise it wouldn't create module for html

app.set('view engine', 'html');
app.set('views',path.join(__dirname+'/view'));

app.use(express.static(path.join(__dirname+'/')));
//it is a middleware(library) which will provide access to file or folder and return control back to express to hold data

app.use(require(path.join(__dirname+'/routes/index'))); // for intiate server routing which will trigger angular functionality from index.html page as main page for single page application.

/*app.get('/',(req,res)=>
    //res.send(`Nodes and express server is running on port ${app.get('port')}`)
    res.sendFile(path.join(__dirname+'/view/index.html'))
);*/


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Max-Age", "3600");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(app.get('port'), ()=> //listen is callback function
  console.log(`your server is running on port ${app.get('port')}`)
);

reload(app);