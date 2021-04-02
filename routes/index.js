var express = require('express');
var router = express.Router();
var student = require("../domain/student")

router.get('/', function(req, res, next) {
    res.send('Hello world!');
});

router.get('/json', function(req, res, next) {
    res.send(student);
});

module.exports = router;
