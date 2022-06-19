
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// app.use(bodyParser())
app.use(express.json())
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server</h1>')
})
app.get('/users', (req, res) => {
  res.json(users)
})

 // the GET Method
 app.get('/users/:id', (req, res) => {
  console.log(req)
  let id = req.params.id
  let found = users.find((element) => {
    return element._id == id
  })
  res.json(found)
 })

 // the POST Method
 app.post('/users', (req, res) => {
  console.log(req.body)
  let newId = users.length + 1
  req.body._id = newId
  users.push(req.body)
  res.json(users)
 })

 // the PUT Method
//  app.put()

 // the DELETE Method
//  app.delete()
/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))