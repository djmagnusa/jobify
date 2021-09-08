const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
    res.send('Hello world from the server router js')
})

router.post('/register', (req, res) => {
    console.log(req.body);
    res.json({ message: req.body })
})

module.exports = router;