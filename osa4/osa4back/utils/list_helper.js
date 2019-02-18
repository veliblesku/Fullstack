const dummy = (blogs) => {
  if(blogs) {
    return 1
  }
}

const totalLikes = (blogs) => {
  
  const allLikes = blogs.reduce(function(sum, blog) {
        
    return sum + blog.likes
        
  },0)
  return allLikes
}

module.exports = {
  dummy,
  totalLikes
}