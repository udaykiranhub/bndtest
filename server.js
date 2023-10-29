var express=require("express");

var app=express();
const ip= require('ip').address();

app.use(express.static('pages'));
var ejs=require("ejs");
console.log(ip);
app.use(express.static("public"));

//app.use(express.static("views"));
var path=require("path");
///////DOMAIN

//app.listen(3000, 'example.com');

app.set("view engine","ejs");

app.set('views','./views');

//////////////


const domain="dayu.co.in";
var options={
    root:path.join(__dirname)
};
app.get("/file",function(req,res){
    res.sendFile("test.html",options);
})
app.get("/img",function(req,res){
    res.send("one.jpeg");
});

app.get("/data",function(req,res){

    var imgurls=["one.jpeg","two.jpeg","three.jpeg","four.jpeg","five.jpeg","six.jpeg"];
    let obj={
        name:"uday",
        college:"lendi",
        img:imgurls
    }

    res.render('index',obj);
})


  
app.listen(4000,function(){
    console.log("server is running!");
});
/*
app.listen(8080,ip,function(){
    console.log("server is running at the port no is 8080"+domain);
});
*/
//https://www.w3schools.com/images/picture.jpg

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3pA-QRtf_92_JztjapPfkY5HiZSqCgfTSQ&usqp=CAU

//"C:\Users\pedda\OneDrive\Desktop\trailimg\public\one.jpeg"

