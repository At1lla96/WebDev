import express from "express";
const app = express();
const port = 3000;
const day = new Date();
const dayOfTheWeek = day.getDay();
app.get("/", (req, res) => {
  if (!(dayOfTheWeek === 0 || dayOfTheWeek === 6))
    res.render("index.ejs", {
      dayType: "a weekday",
      advice: "it's time to work hard",
    });
  else
    res.render("index.ejs", {
      dayType: "a weekend",
      advice: "take a break",
    });
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
