import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modal: false,
      modalTitle: '',
      booktoEdit: {}
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    let apiUrl = `${process.env.REACT_APP_DB_URL}/books?email=${this.props.email}`;
    try {
      const response = await axios.get(apiUrl);
      this.setState({books: response.data})
    } catch (error) {
      alert(error.toString());
    }
  }

  showModal = (title, bookObj) => {
    if (bookObj) {
      this.setState({
        modal: true,
        modalTitle: title,
        booktoEdit: bookObj,
      });
    } else {
      this.setState({
        modal: true,
        modalTitle: title,
    });

  }
}

  hideModal = () => {
    this.setState({
      modal: false,
      modalTitle: '',
    })
  }

  postBooks = async (bookObj) => {
    const url = `${process.env.REACT_APP_DB_URL}/books`
    try {
      let response = await axios.post(url, {...bookObj, email: this.props.email});
      this.setState({books: [...this.state.books, response.data]})
    } catch (error) {
      alert(error.toString());
    }
  }

  deleteBooks = async (id) => {
    const url = `${process.env.REACT_APP_DB_URL}/books/${id}?email=${this.props.email}`
    try {
      await axios.delete(url);
      let filteredBooks = this.state.books.filter(book => book._id !== id);
      this.setState({books: filteredBooks});
    } catch (error) {
      alert(error.toString());
    }
  };

  putBooks = async (id, bookObj) => {
    const url = `${process.env.REACT_APP_DB_URL}/books/${id}?email=${this.props.email}`
    try {
      let bookEdit = await axios.put(url, bookObj);
    } catch (error) {
      alert(error.toString());
    }
  }

  render() {
    return (
      <>
        <BookFormModal booktoEdit={this.state.booktoEdit} modalTitle={this.state.modalTitle} modal={this.state.modal} hideModal={this.hideModal} postBooks={this.postBooks} />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <button onClick={() => this.showModal('Create a Book')} >Create Book</button>
        {this.state.books.length > 0 ? (
          <BookCarousel showModal={this.showModal} books={this.state.books} deleteBooks={this.deleteBooks} />
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
