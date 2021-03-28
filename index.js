const express = require('express');
const app = express();
const port = 4200;

app.get('/', (_, response) => {
    response.json({
        message: "Root"
    }).send();
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});