var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["Rajesh1","Lisa","Michael","Ginger","Food"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
