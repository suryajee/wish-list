const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

//searving static file
app.use(express.static("public"));

require("./models/wish");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//import routes
require("./routes")(app);

app.set("view engine", "ejs");

app.listen(port, () => {
  console.log("server is running on port" + port);
});
