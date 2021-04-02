const express = require('express');
const serv = express();
const port = 8000;

serv.get('/',(_, res) => {res.json({msg: "Success"}).send();})

serv.listen(port)