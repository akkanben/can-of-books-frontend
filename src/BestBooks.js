import React from 'react';
import axios from 'axios';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

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

    /* TODO: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <p>Book Carousel coming soon</p>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
