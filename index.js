const express = require('express')
const app = express()
const PORT_NUMBER = 4000

app.get('/', (req, res) => {
    res.send('Response on get request')
})

app.post('/', (req, res) => {
    res.send('Response on post request')
})

app.listen(PORT_NUMBER, () => {
    console.log(`App is up on port ${PORT_NUMBER}`)
})

module.exports = app