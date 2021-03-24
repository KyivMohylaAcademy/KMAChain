const express = require('express')
const app = express()
const port = 3000

var indexRouter = require('./routes/index');

app.use('/api', indexRouter);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})

module.exports = app;