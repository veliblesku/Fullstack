if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
var uniqueValidator = require('mongoose-unique-validator');

const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')



const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({error: error.message})
  }

  next(error)
}


app.use(express.static('build'))
app.use(cors())

app.use(bodyParser.json())
app.use(morgan('tiny'))







    
    app.get('/api/persons', (request, response) => {
      Person.find({}).then(persons => {
        response.json(persons.map(person => person.toJSON()))
      })
    })

    app.get('/api/persons/:id', (request, response, next) => {
      Person.findById(request.params.id)
      .then(person => {
        if(person){
          response.json(person.toJSON())
        } else {
          response.status(404).end()
        }
        
      })
      .catch(error => next(error))
      // const id = Number(request.params.id)
      // console.log(request.headers)
      // const person = persons.find(person => person.id === id)
      // if (person) {
      //   response.json(person)
      // } else {
      //   response.status(404).end()
      // }
      
    })
    app.use(errorHandler)

    



    app.put('/api/persons/:id', (request, response, next) =>{

      const body = request.body

      const person = {
        name: body.name,
        number: body.number
      }

      Person.findByIdAndUpdate(request.params.id, person, {new: true})
      .then(updatedPerson => {
        response.json(updatedPerson.toJSON())
      })
      .catch(error => next(error))
    })

    app.use(errorHandler)

    

    app.get('/info', (request,response) => {
      const idCount = persons.length
      const time = new Date();
      const timeForPrint = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
      console.log("time", timeForPrint)
      
      response.send(`<ul>Puhelinluettelossa on ${idCount} henkilön tiedot</ul>
      <ul> mmm ${time.getHours()}</ul>`)
      
    })

    app.delete('/api/persons/:id', (request, response, next) => {
    
      Person.findByIdAndRemove(request.params.id)
      .then (result => {
        response.status(204).end()
      })
      .catch(error => next(error))
    })

    app.post('/api/persons', (request, response, next) => {

      const body = request.body

///// kysy tästä??? /////
      if (body.name === '' || body.number==='') {
        return response.status(400).json({error: 'content missing'})
      }
      console.log("undefined", body)


      // if(persons.map(person => person.name).includes(body.name) === true){
      //   return response.status(400).json({
      //     error: 'name is taken'
      //   })
      // }

      const person = new Person({
        name: body.name,
        number: body.number
      })

      person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
      })
      .catch(error => next(error))

      // let max = 10000

      // function getRandomInt(max) {
      //   return Math.floor(Math.random() * Math.floor(max));
      // }
      // const id = String(getRandomInt(max))
      // person.id = id
    
      // persons = persons.concat(person)
      // console.log(person)
    
    })

    app.use(errorHandler)

    const unknownEndpoint = (request, response) => {
      response.status(404).send({ error: 'unknown endpoint' })
    }

    app.use(unknownEndpoint)


    
    
    


    
    const PORT = process.env.PORT
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
    })