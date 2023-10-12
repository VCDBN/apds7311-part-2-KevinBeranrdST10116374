//https://expressjs.com/en/starter/hello-world.html
const http = require('https')
const app = require('app')
const fs =require('fs')

const port = 3000

const server = http.createServer(
    {
        key: fs.readFileSync('keys.privatekey')
    }
)

server.listen(port)