const express = require('express');
const app = express();

// initializing mongoose
const mongoose = require('mongoose');

// importing the model
const Note = require('./models/Note');

//importing body parser.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://sarvkamt:sarveshk13@cluster0.x9kke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(function(){
    // home route (/)
    app.get("/", function(req, res){
        const response = {message: "API Works!"};
        res.json(response);
    });

    const noteRouter = require('./routes/Note')
    app.use("/notes", noteRouter);

    
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server started at port " + PORT);
});