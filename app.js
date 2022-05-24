// Adding module express body-parser request

const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const path=require("path");
const https=require("https");
const mailchimp=require("mailchimp-marketing");


const app=express();

//app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));

app.listen("3000",()=>{
console.log("server is up and running.");
});
app.get("/",(req,res)=>{
res.sendFile(__dirname+"/signup.html");
});
app.post("/", (req,res)=>{
const fname=req.body.fname;
const lname=req.body.lname;
const email=req.body.email;

var data={
members:[{
email_address:email,
status: "subscribed",
merge_fields:{
FNAME:fname,
LNAME:lname
}
}]
}
var jsonData=JSON.stringify(data);

url="https://us18.api.mailchimp.com/3.0/lists/82fa2e5843";
const options={
method:"POST",
Auth:"Narayan:fa7096056f05776f93cabd7a8a55dd80-us18"
}
const request=https.post(url,options,response)=>{
response.on("data",(data)=>{
console.log(JSON.parse(data));
});
});
request.write(jsonData);
request.end();
});
