var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["rajesh","Lisas","hello","ginger","Rajesh2"]);
});


app.listen(3000, () => {
 console.log("Server running on port 80");
});
