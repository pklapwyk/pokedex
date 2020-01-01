//Requirements
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

//View Engine
app.set("view engine", "pug");
app.use(express.static("public"));

//Read JSON file
const content = fs.readFileSync("public/pokemon.json", "utf8")
const pokemon = JSON.parse(content)
console.log(content)


//Pages
app.get("/", (req,res) => {
    res.render("index", {});
});

app.get("/pokemon", (req,res) => {
    res.render("pokemon")
});

app.get("/pokemon.json", (req,res) =>{
    if (err) {
        console.log(err)
    } else {
        res.json(content)
    }
});

//Listening Port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});