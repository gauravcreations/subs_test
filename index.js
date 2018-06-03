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

 var subs = "21000";
 var afterLoad = require("after-load");
afterLoad("https://google.com", function(html){
   
});

let response = "This is a sample response from your webhook!";
let responseObj={
     "fulfillmentText":response
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    subs
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
