var express=require("express");

var app=express();
const ip= require('ip').address();
//app.set("domain","dayu.co.in");
console.log(ip);
app.use(express.static("public"));
var path=require("path");


const domain="dayu.co.in";
var options={
    root:path.join(__dirname)
};


app.get("/",function(req,res){
   res.sendFile("test.html",options);
});
//http://127.0.0.1:5501/test.html


app.listen(8080,function(){
    console.log("server is running at the port no is 8080"+domain);
});
//https://www.w3schools.com/images/picture.jpg

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt3pA-QRtf_92_JztjapPfkY5HiZSqCgfTSQ&usqp=CAU

//"C:\Users\pedda\OneDrive\Desktop\trailimg\public\one.jpeg"