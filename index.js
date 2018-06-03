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
  var userName = req.body.result.parameters.echoText
  var webhookReply = 'Hello ' + userName + '! Welcome from the webhook.'

  return res.status(200).json({
    source: 'subs_test',
    speech: webhookReply,
    displayText: webhookReply
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
