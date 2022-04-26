var express = require('express');
var app = express();
const path = require('path')

app.listen(3000,function(){
    console.log("Server is started");
})

app.use(express.static("public"));
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set("view engine", "ejs")

var recentFiles = [
    {
        image:"",
        name:"Name 1",
        date:"12-10-2000"
    },
    {
        image:"",
        name:"Name 1",
        date:"12-10-2000"
    },
    {
        image:"",
        name:"Name 1",
        date:"12-10-2000"
    },
    {
        image:"",
        name:"Name 1",
        date:"12-10-2000"
    }
];

app.get('/',function(req,res){
    res.render("index");
})

app.get('/files',function(req,res){
    res.render("files",{recentFiles:recentFiles});
})

app.get("*",function(req,res){
    res.send("Page not found");
})
