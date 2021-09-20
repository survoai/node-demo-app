var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["f3333","Lisa","Michael","Ginger","Food"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
