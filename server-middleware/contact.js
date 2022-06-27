const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.text());
app.listen(process.env.PORT);
const hookcord = require("hookcord");
const Hook = new hookcord.Hook();
try{const env = require('../env.json')}catch{}
const accountSid = process.env.TWILIO_ACCOUNT_SID || env.accountSid;
const authToken = process.env.TWILIO_AUTH_TOKEN || env.authToken;
const token = process.env.SECRET || env.secret;
const num = process.env.NUM || env.num;
// require the Twilio module and create a REST client
const client = require("twilio")(accountSid, authToken);

Hook.login("860865759315361802", token);


app.post("/send", async (request, response) => {
  if (
    request.header("Origin") === "https://grahamsh.com" ||
    request.header("Origin").startsWith("http://localhost") ||
    request
      .header("Origin")
      .startsWith(
        "https://3000-kumquat-swordfish-r929uy8j.ws-us11.gitpod.io"
      ) ||
    request.header("Origin").startsWith("https://tech.grahamsh.com")
  ) {
    const body = JSON.parse(request.body); //
    console.log(body);
    Hook.setPayload({
      embeds: [
        {
          title: "New contact!",
          fields: [
            {
              name: "Language",
              value: body.language || "unknown",
              inline: true
            },
            {
              name: "Name",
              value: body.name || "unknown",
              inline: true
            },
            {
              name: "Phone number",
              value: body.phoneNum || "unknown",
              inline: true
            },
            {
              name:
                "User agent" +
                (body.userAgent.includes("Chrome")
                  ? `  <:chrome:758455448751570984> ${Number(
                      body.userAgent.substring(
                        body.userAgent.indexOf("Chrome/") + 7,
                        body.userAgent.indexOf("Chrome/") + 9
                      )
                    ) || ""}`
                  : body.userAgent.includes("Firefox")
                  ? `  <:firefox:758455448688001065> ${Number(
                      body.userAgent.substring(
                        body.userAgent.indexOf("Firefox/") + 8,
                        body.userAgent.indexOf("Firefox/") + 10
                      )
                    ) || ""}`
                  : ""),
              value: body.userAgent
            }
          ],
          description:
            "```" + body.content.replace(/```/g, "[3 backticks]") + "```",
          timestamp: new Date().toISOString(),
          color: 12131356
        }
      ]
    });
    Hook.fire().catch(err => console.log(err));
    client.messages
      .create({
        to: num,
        from: "+18648968773",
        body: `From: ${body.name} ${body.phoneNum}
    ${body.content}`
      })
      .then(message => console.log(message.sid));

    response.header("Access-Control-Allow-Origin", request.header("Origin"));
    response.send("sent!");
  } else response.status(403).send("nope!");
});
module.exports = app;
