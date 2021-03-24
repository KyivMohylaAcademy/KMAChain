var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('Index get')
});

router.post('/', (req, res) => {
    res.send('Index post')
});

module.exports = router;