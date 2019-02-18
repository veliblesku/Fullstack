const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)

const Blog = require('../models/blog')



beforeEach(async() => {
  await Blog.deleteMany({})

  let blogObject = new Blog(helper.initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog (helper.initialBlogs[1])
  await blogObject.save()

  blogObject = new Blog (helper.initialBlogs[2])
  await blogObject.save()

})


test('blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})
test('all blogs are returned', async() => {
  const response = await api.get('/api/blogs')
  expect(response.body.length).toBe(helper.initialBlogs.length)
})

test('blogs identification is id', async() => {
  const response = await api.get('/api/blogs')
  expect(response.body[0].id).toBeDefined()
})

test('post request will save the blogpost to teh database', async() => {

  const newblogPost = {
    _id: '5a411aa71b54a999234d15f1',
    title: 'TestPost',
    author: 'what',
    url: 'www',
    likes: 4,
    __v: 0

  }
  await api
    .post('/api/blogs')
    .send(newblogPost)
    .expect(200)
    .expect('Content-type', /application\/json/)

  
  const blogAtEnd = await helper.blogsInDb()
  expect(blogAtEnd.length).toBe(helper.initialBlogs.length + 1)

  const contents = blogAtEnd.map(n => n.title)
  expect(contents).toContain('TestPost')

})

test('post with empty likes value should be equal to zero', async() => {
  const newblogPost = {
    _id: '1a411bb11b54a999234d15f1',
    title: 'TestPost111',
    author: 'whatido',
    url: 'www',
    __v: 0
  }

  await api
    .post('/api/blogs')
    .send(newblogPost)
    .expect(200)
    .expect('Content-type', /application\/json/)

  const blogAtEnd = await helper.blogsInDb()
  expect(blogAtEnd.length).toBe(helper.initialBlogs.length+1)

  const contents = blogAtEnd.map(n=>n.likes)
  expect(contents).toContain(0)

  
})

test('with HTTP-POST without url and title we will have statuscode 400-Bad requrst', async() => {
  const newblogPost = {
    _id: '1a411bb11b54a999234d15f1',
    author: 'whatido',
    __v: 0
  }
  await api
    .post('/api/blogs')
    .send(newblogPost)
    .expect(400)

})


afterAll(() => {
  mongoose.connection.close()
})
