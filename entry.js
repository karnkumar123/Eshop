const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const chalk = require('chalk');
const shoppingRoute = require('./route/shopping');
const path = require('path');

const app = express();

const PORT = process.env.port || 3000;

// adding middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/shops',shoppingRoute);


// connecting to DB
mongoose.connect('mongodb+srv://karn:Akira@786@shoppinglist.jdxzr.mongodb.net/shoppinglist?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log(chalk.black.bgGreen('DB is connected !'));
    }).catch((err) => {
        console.log(chalk.bgRed('DB connection failed!'), err);
    })

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

app.get('/', (req, res) => {
    res.send('Hello Karan');
})
app.listen(PORT, () => {
    console.log(chalk.black.bgGreen(`server is started at port ${port}`));
})