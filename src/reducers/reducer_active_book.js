// state argument is not application state
// only a state this reducer responsible for

// reducer is also responsible for changing our applications state over time
// with the help of actions
export default function(state = null, action) {
  switch(action.type) {
  case('BOOK_SELECTED'):
    return action.payload
  }

  return state
}
