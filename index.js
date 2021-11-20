const express = require("express");
const hbs = require('express-handlebars');
const app = express();
const port = 3000;
const path = require("path");
var menu = require("./routes/menu");

//Sets handlebars configurations
app.engine(
  "hbs",
  hbs({ extname: 'hbs',defaultLayout: "layout",layoutsDir: __dirname + "/views/layouts"})
);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  
  res.render("index");
});
app.get("/about", (req, res) => {
 
  res.render("about",{layout:'empty'});
});

app.get("/awards", (req, res) => {

  res.render("awards",{layout:'empty'});
});

app.use("/menu", menu);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
