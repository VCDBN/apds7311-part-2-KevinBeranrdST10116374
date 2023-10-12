const express = require('express')
const router = express.Router();
const Fruit = require('../models/fruit')
const checkauth = require('../check-auth')

//https://www.json.org/json-en.html
router.get(urlprefix + '/fruits', (req, res) =>{
    const orders = [
        {
            id: "1",
            name:"Orange"
        },
        {
            id: "2",
            name:"Banana"
        },
        {
            id: "3",
            name:"Pear"
        }
    ]
})

router.post("",checkauth,(req,res)=>{
    const fruit = new Fruit(
        {
            id: req.body.id,
            name: req.body.name
        }
    )
})

router.delete('/id' + checkauth, (req, res) =>{
    Fruit.deleteOne({_id: req.params.id})
    .then((result)=>
    {
        res.status(200).json({message: "Fruit Deleted"});
    });
})

module.exports = app;