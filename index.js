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

  return res.json({
    
    speech: webhookReply,
    displayText: webhookReply,
    source: 'subs_test'
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
