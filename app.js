const express = require('express')
const app = express()

const people = require('./routes/people')

app.use(express.urlencoded({ extended: false })) // parse form data
app.use(express.json()) // parse json

app.use('/api/people', people)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
