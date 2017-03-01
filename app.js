const express = require('express')
const app = express()
const requestProxy = require('express-request-proxy')
const compression = require('compression')
const headers = {
    Authorization: "Basic " + new Buffer(process.env.BIBLES_KEY + ':X').toString('base64')
}

app.set('port', (process.env.PORT || 3000));
app.use(compression());

app.get('/api/*', requestProxy({
    url: 'https://bibles.org/v2/*',
    headers
}))

app.listen(app.get('port'))

process.on('uncaughtException', () => server.close())
process.on('SIGTERM', () => server.close())
