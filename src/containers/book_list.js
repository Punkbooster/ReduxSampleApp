import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className='list-group-item'>{book.title}</li>
      )
    })
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

// whatever is returned will show up as props inside of BookList
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

// smart component is a component which has connection to a redux state
// connect takes a function and a component and produces a container(smart component)
export default connect(mapStateToProps)(BookList)
