// import dependencies
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;

// set up middle 
app.use(express.urlencoded({extended:true}));

app.use(express.json());

// tell server to ignore any request being made to anything in the "public" folder
app.use(express.static("public"));

// set up template engine (handlebars)
app.engine("handlebars", exphbs({defaultLayout : "main"}));
app.set("view engine", "handlebars");

// turn on routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// set up wildcard (404 route)
app.get("*", function (req, res){
  res.json({
    status: 404,
    message: "You've come to the wrong place!"
  });
});

// turn on the server
app.listen(PORT, () => console.log(`🌍 => listening to http://localhost:${PORT}`));