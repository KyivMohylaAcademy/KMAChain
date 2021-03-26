let express = require('express');
let server = express();
server.listen(8888);

server.get('/', function (req, res){
    res.status(200);
    res.json({"Status": "Ok"});
});


