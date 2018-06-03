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
    source: 'subs_test',
    speech: webhookReply,
    displayText: webhookReply
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
