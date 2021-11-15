const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 3000;
const path = require("path");
// to use static website in node.js
const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

const template_path = path.join(__dirname, "../templates/views");
const partials = path.join(__dirname, "../templates/parsials");
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("error");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
