const express=require('express');
const app = express();
const mongoose=require("mongoose");
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb+srv://430lab:vpcK0xIQNPuyypn4@430-midterm-db.dsbzrna.mongodb.net/test", {useNewUrlParser: true}, {useUnifiedTopology: true})

//create a database schema
const testSchema={
username: String,
password: String
}

const Test= mongoose.model("Test", testSchema);

app.get("/", function(req, res){
    res.sendFile(__dirname+"/login.html");
})

//app.post
app.post("/", function(req,res){
    let newTest= new Test({
        username: req.body.username,
        password: req.body.password
    });
    newTest.save();
    //return res.redirect(__dirname+"index.html")
})


app.listen(3000, function(){
    console.log("server is running on 3000");
})