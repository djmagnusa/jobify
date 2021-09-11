const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {   //confirm password
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(next) {
    
    console.log("Hello from inside");
    
    if(this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.password, 12);
    }
    next();
});

const User = mongoose.model('USER', userSchema) //USER wll be converted to User

module.exports = User;