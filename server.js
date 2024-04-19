const express=require("express");
const cors=require("cors");
const bodyParser=require("body-parser");
const babelPolyfill=require("babel-polyfill");
const noteRoute=require("./route/noteRoute")

const app=express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
  })


 app.use("/api/v1",noteRoute) 
 
app.listen(5000,()=>{console.log("server start.....")});