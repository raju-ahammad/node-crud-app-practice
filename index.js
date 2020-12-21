const express = require("express")
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()
const postRoute = require('./api/routes/post')
const bodyParser = require('body-parser')


const app = express()
//********** middleware implepment **************//
app.use(express.json())
app.use(cors());
app.use(morgan(':method :url :status - :response-time ms'))
app.use('/api/post', postRoute);
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.get('/', (request, response) => {
    response.send('<h1>Hello express bro</h1>')
})


port = process.env.PORT || 3001
app.listen(port, () => {
    console.log(`server is runnig on port ${port}`);
})