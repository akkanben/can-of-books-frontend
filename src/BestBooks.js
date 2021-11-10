import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modal: false
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
      alert(error.toString());
    }
  }

  showModal = () => {
    this.setState({
      modal: true,
    })
  }

  hideModal = () => {
    this.setState({
      modal: false,
    })
  }

  postBooks = async (bookObj) => {
    const url = `${process.env.REACT_APP_DB_URL}/books`
    try {
      let response = await axios.post(url, bookObj);
      this.setState({books: [...this.state.books, response.data]})
    } catch (error) {
      alert(error.toString());
    }
  }

  render() {
    return (
      <>
        <BookFormModal modal={this.state.modal} hideModal={this.hideModal} postBooks={this.postBooks} />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <button onClick={this.showModal} >Create Book</button>
        {this.state.books.length > 0 ? (
          <BookCarousel books={this.state.books} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
