// // // // Branie danych z innego required pliku

// const functions = require("./functions");
// functions.helloWorld();
// functions.add(2,3);



// // // // Ustawianie portu
// const http = require("http");
// const handler = (request, response)=>{
//     console.log("Sample message");
//     response.end("Hello World");
// }

// const server = http.createServer(handler);
// const port = 3000;

// server.listen(port,(err)=>{
//     if(err) {return console.log("blad:",err)}
//     console.log(`serwer dziala na porcie ${port}`);
// });


// // // // EXPRESS
const express = require("express");
const port = process.env.PORT || 3000;
const app=express();
const path = require("path");

app.set("view engine", 'hbs');
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.get('/', function (req, res) {
    res.render('index', {
    pageTitle: "Lekcja01"
    })
    })


app.listen(port,(err)=>{
    if(err) {return console.log("blad:",err)}
    console.log(`serwer dziala na porcie ${port}`);
});
