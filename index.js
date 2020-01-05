//Requirements
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

//View Engine
app.set("view engine", "pug");
app.use(express.static("public"));

//Read JSON file
const content = fs.readFileSync("public/pokemon.json", "utf8");
//console.log(content)
//const foo = require("/public/pokemon.json");
//console.log(foo)
//console.log(content)
//const pokemon = JSON.parse(content)
//console.log(pokemon)
//app.locals.SampleData = require('public/pokemon.json');

//Pages
app.get("/", (req,res) => {
    res.render("index", {});
});

app.get("/pokemon", (req,res) => {
    res.render("pokemon")
    res.json(content)
});

app.get("/pokemon.json", (req,res) =>{
    res.send(JSON.stringify(content))
    console.log(content)
});

//app.get('/pokemon.json', function (req, res) {
//    res.header("Content-Type", 'application/json');
//    res.send(JSON.stringify(data));
//})

//Listening Port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});