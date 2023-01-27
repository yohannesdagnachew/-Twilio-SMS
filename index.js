var sid = "ACa0614ba3320d9d0f97ca1975f055d423";
var auth_token = "594edd0abe1c7134c74fb2f69ce33780";

var twilio = require("twilio")(sid, auth_token);

twilio.messages
  .create({
    from: "+14243771675",
    to: "+251947056756",
    body: "this is a testing message",
  })
  .then(function(res) {console.log("message has sent!")})
  .catch(function(err)  {
    console.log(err);
  });