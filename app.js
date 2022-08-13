require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const routes = require('./router/router');


app.use(express.json());

app.use('/api/v1', routes);

const start = () => {
    try {
        app.listen(port, () => {
            console.log(`server running on port: ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();