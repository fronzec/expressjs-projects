const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.info(`Service started in port ${port}`);
});
