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
  host: 'www.google.com',
  port: 80,
  path: '/index.html'
};

http.get(options, function(res) {
  console.log("Got response: " + res.statusCode);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
  
let response = "This is a sample response from your webhook!";
let responseObj={
     "fulfillmentText":response
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    res.statusCode
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
