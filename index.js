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
 var webhookReply = 'Welcome from the webhook.'
  
  let response = "This is a sample response from your webhook!";//Default response from the webhook to show it’s working
let responseObj={
     "fulfillmentText":webhookReply
    ,"fulfillmentMessages":[
        {
            "text": {
                "text": [
                    "Hello I m Responding to intent"
                ]
            }
        }
    ]
    ,"source":"subs_test"
}
return res.json(responseObj);
});

});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
