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

/*
  1. Ta emot/läsa av värdet i Input-fältet.
  2. Skicka värdet till searchBook funktionen.
  3. searchBook returnerar en filtrerad lista.
  4. Filtrerade listan skickas till renderList.
 */
function handleKeyPress(input) {
  const result = searchBooks(input)
  renderBookList(result)
}

/*
  1. Loopa igenom bookList.
  2. För varje varv i loopen, ta det aktuella elementet (boken).
  3. Jämför titeln med söktermen.
  4. Om söktermen finns någonstans i titeln, lägg till elementet i en ny lista (filteredList).
  5. Returnera filteredList eller anropa renderBookList?
 */
function searchBooks(searchTerm) {
  const filteredList = [];
  for(let i = 0; i < bookList.length; i++) {
    const title = bookList[i].title.toLowerCase();
    if (title.indexOf(searchTerm.toLowerCase()) >= 0) {
      filteredList.push(bookList[i])
    }
  }
  return filteredList;
}

/*
  Element i HTML-listan visas/döljs beroende på listans innehåll.
 */
function renderBookList(searchResults) {
  console.log("Printad ifrån 'renderBookList'")
  console.log(searchResults);
}

handleKeyPress("e")