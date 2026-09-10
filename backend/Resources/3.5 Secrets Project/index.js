//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
function isUserAuth(password)
{
    if(password==="ILoveProgramming")
        return true;
    else
        return false;
}
var password="";
app.post("/check", (req, res) => {
  password=req.body["password"];
  console.log(password);
  if(isUserAuth(password))
    res.sendFile(__dirname + "/public/secret.html");
  else
    res.redirect("/");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
