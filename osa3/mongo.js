const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]
const getFirstName = process.argv[3]
const getLastName = process.argv[4]
const getNumber = process.argv[5]
const getName = `${getFirstName} ${getLastName}`

const url =
  `mongodb+srv://blese:${password}@cluster0-89q6g.mongodb.net/persons_app?retryWrites=true`
  
mongoose.connect(url, { useNewUrlParser: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: getName,
    number: getNumber
    
})
if (getFirstName === undefined || getLastName=== undefined) {
    console.log("Phonebook: ")
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person)
        })
        mongoose.connection.close()
      })

} else {

    person.save().then(response => {
        console.log(`lisätään ${person.name} numero ${person.number} luetteloon`);
        mongoose.connection.close();
      })

}


