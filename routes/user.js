const express = require('express')
const router = express.Router();
const User = require('../models/user')

router.post('/signup', (req, res)=>{
    //https://www.npmjs.com/package/bcrypt
    brypt.hash(req.body.password,10)
    .then(hash =>{
        const user = new User({
            username:req.body.username,
            password: hash
        });
        user.save()
        .then(result =>{
            res.status(201).json({
                message: "User created",
                result: result
            });
        })
        .catch(err =>{
            res.status(500).json({
                error: err
            });
        });
    })
    const user = new User(
        {
            username: req.body.username,
            password: req.body.password
        }
    )
    user.save();
    res.status(201).json({
        message: 'User created',
        user:user
    })
})

router.post('/login', (req, res)=>{
    let fetchedUser;
    User.dindOne({username: req.body.username})
    .then(user =>{
        const user = new User({
            username:req.body.username,
            password:req.body.password
        });
        user.save()
        .then(result =>{
            res.status(201).json({
                message: "User created",
                result: result
            });
        })
        .catch(err =>{
            res.status(500).json({
                error: err
            });
        });
    })
    .then(result=>{
        if(!result)
        {
            return res.status(401).json(
                {
                    message: "Authentication Failure"
                });
        }
        const token = jwt.sign({username:fetchedUser.username,userid:fetchedUser._id},
            'secret_this_should_be_longer_than_it_is',
            {expiresIn:'1h'});

        res.status(200).json({token:token});
    })
    .catch(err =>{
        return res.status(401).json({
            message:"Authentication Failure"
    });
    })
})

module.exports = router