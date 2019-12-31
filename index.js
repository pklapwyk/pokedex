//Requirements
const express = require("express");

const app = express();
const port = 3000;

//View Engine
app.set("view engine", "pug");
app.use(express.static("public"));

//Pages
app.get("/", (req,res) => {
    res.render("index", {});
});

//Listening Port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});