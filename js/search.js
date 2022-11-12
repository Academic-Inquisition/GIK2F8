let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
})

const searchField = document.getElementById('searchField')
searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));

function searchBooks(searchTerm) {
  renderBookList(
    bookList.filter(({ author, title }) => {
      return author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
             title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
    })
  )
}

/*
  Element i HTML-listan visas/döljs beroende på listans innehåll.
 */
function renderBookList(searchResults) {
  const existingElement = document.querySelector(".book-list")
  console.log(existingElement)
  const root = document.getElementById('root')
  console.log(existingElement != null)
  if (existingElement != null)
    root.removeChild(existingElement)
  if (searchResults.length > 0 && searchField.value)
    root.insertAdjacentHTML("beforeend", BookList(searchResults))
}