"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/saySub", function(req, res) {
res.setHeader("Content-Type","application/json");

 var options = {
  host: "www.google.com",
  port: 80,
  path: "/index.html"
};

http.get(options, function(res) {
  
}).on('error', function(e) {
  
});
  
let response = "This is a sample response from your webhook!";
let responseObj={
     "fulfillmentText":response
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "sss"
                ]
            }
        }
    ]
    ,"source":"subs_test"
}
return res.json(responseObj);

});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
