const express=require("express");
const app=express();
app.listen(process.env.PORT||3000,function(){
  console.log("Server is running at port number 3000");


});
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});
