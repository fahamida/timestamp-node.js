var express = require('express');
var app = express();


app.get("/api/timestamp/:date_string", function(req,res){

    var date = req.params.date_string;
    
    var newDate= new Date(date);
        res.status(200).send({
            "unix":newDate.getTime(),
             "utc": newDate.toUTCString()
        });

        res.status(404).send({
            "error" : "Invalid Date"
        });
    
    
});

app.get("/api/timestamp/", function(req,res){

    var newDate= new Date();

        res.status(200).send({
            "unix":newDate.getTime(),
             "utc": newDate.toUTCString()
        });
        res.status(404).send({
            "error" : "Invalid Date"
        });
    
    
});

app.get("/api/:link", function(req,res){

        res.status(200).send({
            "error" : "Invalid Date"
        });
        res.status(404).send({
            "error" : "Invalid Date"
        });
    
    
});

app.listen(3000,function(){
    console.log("Server is running on port 3000!");
})