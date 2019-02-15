const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan= require('morgan')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.json())
app.use(morgan('tiny'))


let persons = [
      {
        "name": "Pekka Pekkanen",
        "number": "041-123456",
        "id": 5
      },
      {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
      },
      {
        "name": "Martti Tienari",
        "number": "040-123456",
        "id": 2
      },
      {
        "name": "Arto Järvinen",
        "number": "040-123456",
        "id": 3
      },
      {
        "name": "Lea Kutvonen",
        "number": "040-123456",
        "id": 4
      }
    ]
  

    
    app.get('/api/persons', (req, res) => {
      res.json(persons)
    })

    app.get('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      console.log(request.headers)
      const person = persons.find(person => person.id === id)
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
      
    })

    app.get('/info', (request,response) => {
      const idCount = persons.length
      const time = new Date();
      const timeForPrint = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
      console.log("time", timeForPrint)
      
      response.send(`<ul>Puhelinluettelossa on ${idCount} henkilön tiedot</ul>
      <ul> mmm ${time.getHours()}</ul>`)
      
    })

    app.delete('/api/persons/:id', (request, response) => {
      const id = Number(request.params.id)
      const person = persons.filter(person => person.id !== id)
      response.status(204).end();
    })

    app.post('/api/persons', (request, response) => {

      const person = request.body

      if(persons.map(person => person.name).includes(person.name) === true){
        return response.status(400).json({
          error: 'name is taken'
        })
      }

      let max = 10000

      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }
      const id = String(getRandomInt(max))
      person.id = id
     
     
      persons = persons.concat(person)
      console.log(person)
    
      
      response.json(person)
    })
    
    const PORT = process.env.PORT || 3001
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })