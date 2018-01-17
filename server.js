/**
 * Created by Asaan on 16/01/2018.
 */
const express = require('express') ,
    app = express(),
    path = require('path'),
    open = require('open'),
    chalk = require('chalk');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/src/index.html"))
});


app.use('/node_modules', express.static(__dirname + '/node_modules/'));
app.use('/src', express.static(__dirname + '/src/'));
app.listen(3000);
console.log(chalk.green('App Started at https://localhost:3000!'));
open("http://localhost:3000" );