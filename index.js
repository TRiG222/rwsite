const { readFile } = require("fs");

var path = require('path');
const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile('slot2-1.html', { root: __dirname })
})

app.get('/restock.html', (req, res) => {
    res.sendFile('restock.html', { root: __dirname })
})

app.get('/slot2.html', (req, res) => {
    res.sendFile('slot2.html', { root: __dirname })
})

app.listen(PORT, () => {
    console.log('server start')
})

