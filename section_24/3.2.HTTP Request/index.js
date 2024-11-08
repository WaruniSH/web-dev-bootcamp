import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello, world!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me </h1><p> 65434343232</p>");
});

app.get("/About", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Waruni Sandamali  Hettiarachchi</p");
});


app.listen(port, ()  => {
    console.log(`Server statred on port ${port} `);
});