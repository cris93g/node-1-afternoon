const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
app.use(bodyParser.json());

const mc = require("./controllers/messages_controller");
const messagesBaseUrl = "/api/messages";
app.use(express.static("./public/build"));
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete);
app.listen(port, () => {
  console.log(`listening on port:${port}`);
});
