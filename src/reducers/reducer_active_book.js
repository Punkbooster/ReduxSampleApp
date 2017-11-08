// state argument is not application state
// only a state this reducer responsible for
export default function(state = null, action) {
  switch(action.type) {
  case('BOOK_SELECTED'):
    return action.payload
  }

  return state
}
