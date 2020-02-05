import express = require('express')
const app: express.Application = express()

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen('3000', () => {
    console.log('Application is ready on port 3000')
})