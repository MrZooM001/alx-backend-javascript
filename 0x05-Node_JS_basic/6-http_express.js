const express = require('express');

const app = express();
const port = 1245

app.get('/', (_, res) => {
    res.send('Hello Holberton School!');
});

app.listen(port, () => {
    console.log(`small express server is listening on: http://localhost:${port}`);
});

module.exports = app;
