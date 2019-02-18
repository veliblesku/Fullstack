const Blog = require('../models/blog')
const User = require('../models/user')
const initialBlogs = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'No dijkstra neither',
    url: 'http://brokenURLLLLLedu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 2,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d15f1',
    title: 'Go To Statement Considered Useful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 11,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d12f7',
    title: 'Go To Statement Considered Neutral',
    author: 'There is not gonna be dijkstra here',
    url: 'http://wBROKEN_URLiolations/Go_To_Considered_Harmful.html',
    likes: 9,
    __v: 0
  
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.remove()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
  const users = await User.find({})
  return users.map(u => u.toJSON())
}
  

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb
}