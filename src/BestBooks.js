import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    let apiUrl = `${process.env.REACT_APP_DB_URL}/books`;
    try {
      const response = await axios.get(apiUrl);
      this.setState({books: response.data})
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <BookCarousel books={this.state.books}/>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
