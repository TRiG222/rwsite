const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
    res.writeHead({
        'Content-Type': 'text/html'
    })

    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'source', 'index.js'), (err))
    }
    // res.end('<h1>Hello</h1>')
})

server.listen(5000, () => {
    console.log('Server start')
})