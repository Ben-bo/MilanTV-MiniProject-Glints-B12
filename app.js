require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.get('/tesconnect', (req, res) => res.status(200).send({
    message: 'backend team f connected with u',
}))

const PORT = process.env.PORT || 3000
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${PORT}`);
})