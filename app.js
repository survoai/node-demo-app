var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["sss","Lisaa","hello","ginger","Rajesh"]);
});


app.listen(3000, () => {
 console.log("Server running on port 80");
});
