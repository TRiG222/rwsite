const { readFile } = require("fs");

const express = require('express')
const app = express()

const PORT = process.env.PORT || 80

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
})

app.listen(PORT, () => {
    console.log('server start')
})
