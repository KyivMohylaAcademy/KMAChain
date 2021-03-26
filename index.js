const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_, res) => {
    res.json({ message: "Connection - done;"}).send();
});

app.listen(port, () => {console.log(`App listening at http://localhost:${port}`)});