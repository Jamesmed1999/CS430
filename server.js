const mongoose = require('mongoose');
const express = require('express');
const app = express();


const uri = "mongodb+srv://430lab:vpcK0xIQNPuyypn4@430-midterm-db.dsbzrna.mongodb.net/test";

//function to connect to mongoDB, will catch an error if it fails and log it out 
async function connect_to_db() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB");
    } catch (error) {console.error(error)}
}

//call the function to connect to mongoDB
connect_to_db();

//import the schema table template from userInfo.js
require("./userInfo");
const user = mongoose.model("User");


//API to request and receive user info
app.post("/signup",async(req,res)=> {
    const {username, email, password} = req.body;
    try {
        await user.create({
            username,
            email,
            password,
        });
        res.send({status:"success"});

    } catch (error) {
        res.send({status:"error"});
    }
});

//log out that we have started our server
app.listen(8000, () => {console.log("Server started on port 8000")});

