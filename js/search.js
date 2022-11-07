const searchInput = null
const bookList = [
  {
    id: 1,
    author: 'Charles Dickens',
    title: 'Oliver Twist'
  },
  {
    id: 2,
    author: 'William Shakespear',
    title: 'Hamlet'
  }
]

const handleKeyPress = () => {
  console.log("Handled keypress")
}

function test(func) {
  func();
}

test(handleKeyPress)

