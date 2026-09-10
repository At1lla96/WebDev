import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

var brandname = "";
function randombrandname(req, res, next) {
  brandname = req.body["street"] + req.body["pet"];
  console.log(req.body);
  next();
}
app.use(randombrandname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>${brandname}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
