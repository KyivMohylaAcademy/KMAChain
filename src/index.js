const express = require('express');
// const { Faculty } = require('./models');

const app = express();
const port = 3000;


app.get('/', (req, res, next) => {
    console.log()
    res.send('Accessed root of the repository. Please authenticate to access data.');
})

app.get('/api/healthcheck', (req, res, next) => {
    res.send('Working!')
})

app.listen(port, () => {
    console.log('Listening on port ' + port + '...');
})