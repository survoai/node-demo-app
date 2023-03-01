var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
 res.json(["Sunflower","Rose","Lily","Marigold","Orchids"]);
});

app.listen(80, () => {
 console.log("Server running on port 80");
});
