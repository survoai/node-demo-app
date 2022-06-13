var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["Rajesh11","Lisa","henlo","Ginger","Rajesh1"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
