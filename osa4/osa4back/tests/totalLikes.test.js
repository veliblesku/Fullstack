const listHelper = require('../utils/list_helper').totalLikes


describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  const emptyList = []
  
  const biggerList = [
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

  
  test('when list has only one blog equals the likes of that', () => {
    const result = listHelper(listWithOneBlog)
    expect(result).toBe(5)
  })
  
  test('of empty list is zero', () => {
    const result = listHelper(emptyList)
    expect(result).toBe(0)
  })
  test('multiple elements in the list',() => {
    const result = listHelper(biggerList)
    expect(result).toBe(22)
  })

  
})