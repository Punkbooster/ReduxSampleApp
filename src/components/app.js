import React, { Component } from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book-detail'

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}

// The circle of the redux react application goes like this:
// We tie an action creator to a button, whenever we click a button 
// we call an actionCreator which dispatches our action, that action automatically
// sent to all of our reducers and for reducers that care about that particular action
// they return a piece of state which is resembled as a global application state,
// and that global application state than enjected to all the different containers
// inside of our application, container than rerender and couse the view to update
