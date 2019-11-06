const express = require('express')
const app = express()

//var bodyParser = require('body-parser')//add this
//app.use(bodyParser())//add this before any route or before using req.body

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


'use strict'
const data = [
  {
    id: 1,
    title: "Jeans",
    subItems: [{
      id: 11,
      title: "Holgados"
    },
    {
      id: 12,
      title: "Apretados"
    }]
  },
  {
    id: 2,
    title: "Denim"
  },
  {
    id: 3,
    title: "Ropa"
  },
  {
    id: 4,
    title: "Accesorios"
  },
  {
    id: 5,
    title: "Básicos infaltables"
  },
  {
    id: 6,
    title: "Novedades"
  },
  {
    id: 7,
    title: "Rebajas"
  }
];

app.get('menu', (req, res) => {
	res.status(200).send({ data: data || null })
})


// This responds a POST request for the homepage (Cambio para publicación)
app.post('contact', function (req, res) {
    
	res.status(200);
    res.write("");
    res.end()
})

module.exports = app