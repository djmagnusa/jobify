const express = require('express');
const router = new express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate");


require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send('Hello world from the server router js')
})

//promises

// router.post('/register', async (req, res) => {
   
//     const { name, email, phone, work, password, cpassword  } = req.body;
   
//     if(!name || !email || !phone ||  !work || !password || !cpassword )
//     {
//         return res.status(422).json({error: 'Fill the the details '});
//     }

//     User.findOne({ email: email })
//         .then((userExist) => {
//             if(userExist) {
//                 return res.status(422).json({ error: "Email already exist"});
//             }   

//             const user = new User({ name, email, phone, work, password, cpassword })

//             user.save().then(() => {
//                 res.status(201).json({ message: "User registered successfully "});
//             }).catch((err) => res.status(500).json({error: "Failed to register"}))
//     }).catch(err => { console.log(err); });
   
// });

//async await

router.post('/register', async (req, res) => {
   
    const { name, email, phone, work, password, cpassword  } = req.body;
   
    if(!name || !email || !phone ||  !work || !password || !cpassword )
    {
        return res.status(422).json({error: 'Fill the the details '});
    }

    try{
        const userExist = await User.findOne({ email: email })
       
        if(userExist) {
            return res.status(422).json({ error: "Email already exist"});
        } else if(password != cpassword) {
            return res.status(422).json({ error: "password does not match"})
        } else {
            const user = new User({ name, email, phone, work, password, cpassword })
       


            await user.save();

            //console.log(`${user} registered successfully`);
            // console.log(userRegister);

            res.status(201).json({ message: "User registered successfully "});

        }

        
        
    } catch(err) {
        console.log(err);
    }
});

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        if(!email || !password) {
            return res.status(400).json({ error: "Fil the required data " })
        }

        //userLogin will container full document with id same as the specified one
        const userLogin = await User.findOne({ email: email });

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            const token = await userLogin.generateAuthToken();
            console.log(token);
            // console.log(userLogin);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000), //will expire in 30 days
                httpOnly: true
            })
    
            if(!isMatch) {
            res.status(400).json({ error: "Invalid credentials"})
            } else {
                res.json({ message: "Sign in successful"})
            }
        } else {
            res.status(400).json({ error: 'Invalid credentials '});
        }

    } catch (err) {
        console.log(err);
    }
})

//about us page
router.get('/about', authenticate ,(req, res) => {
    res.send('Hello about world from the server')
})




module.exports = router;