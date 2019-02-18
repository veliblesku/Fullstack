
const mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  url: {
    type: String,
    required: true
  },
  likes: Number,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})


blogSchema.plugin(uniqueValidator)

blogSchema.plugin(uniqueValidator)
// const mongoUrl = 'mongodb+srv://blese:Moikkamoi@cluster0-89q6g.mongodb.net/blog-app?retryWrites=true'
// mongoose.connect(mongoUrl, { useNewUrlParser: true })
// .then(result => {
//     console.log('connected to MongoDb')
// })
// .catch((error) => {
//     console.log('error connection to MongoDB:', error.message)
// })

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Blog', blogSchema)
