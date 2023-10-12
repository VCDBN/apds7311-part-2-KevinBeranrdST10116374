const express = require('express')
const app = express()

//https://expressjs.com/en/starter/helloe-world.html
const urlprefix = '/api'
const mongoose = require('mongoose')
const fs = require('fs');
const cert = fs.readFileSync('keys/privatekey.pem');
const options = {
    server: {sslCA: cert}};
const connstring = 'mongodb+srv://<admin1>:<zyOvWrfwGLA99u3M>@cluster0.ry52tgd.mongodb.net/?retryWrites=true&w=majority';

const fruitRoutes = require("./routes/fruit");

mongoose.connect(connstring)
.then(()=>
{
    console.Consolelog('Connected :-)')
})
.catch(()=>
{
    console.Consolelog('Not Connected :-)') 
},options);

app.use(express,json())
//hhtps://www.json.org/json-en/html
app.use((req, res, next)=>
{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', '*');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World Express')
})

app.use(urlprefix + '/fruits', fruitRoutes)
app.use(urlprefix + '/users', userRoutes)

module.exports = app;