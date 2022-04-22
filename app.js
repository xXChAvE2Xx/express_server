const express = require('express');
const app = express()
const port = 3000 //localhost:3000

//localhost:3000
app.get('/', (req, res) =>{
    res.send("Hola  Mundo!!")
})

//localhost:3000/launchx
app.get('/launchx', (req, res) =>{
    res.send("Bienvenidos a Launch X")
})

//localhost:3000/node
app.get('/node', (req, res) =>{
    const explores1= {
        id: 1, name: "Raul" , apellidos: "Chavez", semestre: 8, carrera: "Ingenieria en Telematica" 
    }
    res.send(explores1)
})

//localhost:3000/explorer/parametro
app.get('/explorer/:explorer', (req, res) =>{
    console.log(req.params) //{"explorer":"raul"}
    res.send(req.params)
})

app.listen(port, () =>{
    console.log("Server is runnig!");
})
