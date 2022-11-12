const url = 'https://gik2f8-labs.herokuapp.com/books'

async function getAll() {
  return await fetch(url).then((result) => result.json());
}