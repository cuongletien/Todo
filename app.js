const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router/index')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api', router)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))