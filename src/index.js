const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const routes = require('./routes')

mongoose.connect('mongodb+srv://matheus:0000@cluster0-jont8.mongodb.net/uparquivos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads')));
app.use(routes);


app.listen(3333);