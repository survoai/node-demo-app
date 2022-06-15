var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["hello","Lisas","henlo","Ginger","Rajesh2"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
