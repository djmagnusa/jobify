const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('connection successful');
}).catch((e) => console.log('no connection'));