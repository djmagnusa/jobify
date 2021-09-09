const express = require('express');
const router = new express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js')
})

router.post('/register', (req, res) => {
   
    const { name, email, phone, work, password, cpassword  } = req.body;
   
    if(!name || !email || !phone ||  !work || !password || !cpassword )
    {
        return res.status(422).json({error: 'Fill the the details '});
    }

    User.findOne({ email: email })
        .then((userExist) => {
            if(userExist) {
                return res.status(422).json({ error: "Email already exist"});
            }   

            const user = new User({ name, email, phone, work, password, cpassword })

            user.save().then(() => {
                res.status(201).json({ message: "User registered successfully "});
            }).catch((err) => res.status(500).json({error: "Failed to register"}))
    }).catch(err => { console.log(err); });
   // console.log(name);
    //console.log(email);
    // res.json({ message: req.body })
});

module.exports = router;