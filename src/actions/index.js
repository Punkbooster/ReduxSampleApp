export function selectBook(book) {
  // selectBook is an ActionCreator and it needs to return an action
  // an aobject with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
