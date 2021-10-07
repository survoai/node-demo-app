var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["Jackson111dss2123","Lisa","Michael","Ginger","Drinks"]);
});


app.listen(80, () => {
 console.log("Server running on port 80");
});
