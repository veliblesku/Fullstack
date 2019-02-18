const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs.map(blog => blog.toJSON()))

})


blogsRouter.get('/:id', (request, response, next) => {
  Blog.findById(request.params.id)
    .then(blog => {
      if(blog) {
        response.json(blog.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

blogsRouter.post('/', async (request, response, next) => {
  const body = request.body

  const user = await User.findById(body.userId)
  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes || 0,
    user: user._id
  })


  try {
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    response.json(savedBlog.toJSON())
  } catch(exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  }catch(exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body

  const post = ({ 
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    id: body.id
  })
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, post, {new:true})
    response.json(updatedBlog.toJSON())
    response.status(200).end()
   
  } catch (exception) {
    next(exception)
  }
})



module.exports = blogsRouter