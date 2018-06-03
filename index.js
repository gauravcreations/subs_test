"use strict";
var {google} = require('googleapis');
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
  
  var service = google.youtube('v3');
  service.channels.list({
    part: 'statistics',
    id: 'UC2WKsYBxMwx7E7ENkND-fkg',
    fields: 'items/statistics/subscriberCount',
    key: 'AIzaSyBJZGagcjUu1rsh9xhojZB3vU7bIVOiGSo'
  }
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
