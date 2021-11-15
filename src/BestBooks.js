import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';
import BookFormModal from './BookFormModal';
import Button from 'react-bootstrap/Button';
import {withAuth0} from '@auth0/auth0-react';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      modal: false,
      modalTitle: '',
      booktoEdit: {},
      carouselIndex: 0
    }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {"Authorization": `Bearer ${jwt}`},
        method: 'get',
        baseURL: process.env.REACT_APP_DB_URL,
        url: '/books'
      }
      try {
        const booksResponse = await axios(config);
        this.setState({books: booksResponse.data});
      } catch (error) {
        console.error(error);
      }
    }
  }

  postBooks = async (bookObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {"Authorization": `Bearer ${jwt}`},
        method: 'post',
        baseURL: process.env.REACT_APP_DB_URL,
        url: '/books',
        data: bookObj,
      }
      try {
        let response = await axios(config);
        this.setState({books: [...this.state.books, response.data]})
      } catch (error) {
        console.error(error.toString());
      }
    }
  }

  showModal = (title, id, bookObj) => {
    if (bookObj && id) {
      this.setState({
        modal: true,
        modalTitle: title,
        booktoEdit: bookObj,
        booktoEditId: id,
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

  deleteBooks = async (id, bookObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {"Authorization": `Bearer ${jwt}`},
        method: 'delete',
        baseURL: process.env.REACT_APP_DB_URL,
        url: `/books/${id}`,
        data: {...bookObj, email: this.props.auth0.user.email},
      }
      try {
        await axios(config);
        let filteredBooks = this.state.books.filter(book => book._id !== id);
        this.setState({books: filteredBooks});
        this.setState({carouselIndex: 0});
      } catch (error) {
        console.error(error.toString());
      }
    }
  }

  setCarouselIndex = (index) => {
    this.setState({carouselIndex: index});
  }

  putBooks = async (id, bookObj) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;
      const config = {
        headers: {"Authorization": `Bearer ${jwt}`},
        method: 'put',
        baseURL: process.env.REACT_APP_DB_URL,
        url: `/books/${id}`,
        data: {...bookObj, email: this.props.auth0.user.email},
      }
      try {
        await axios(config);
        this.getBooks();
      } catch (error) {
        console.error(error.toString());
      }
    }
  }

  render() {
    return (
      <>
        <BookFormModal
          booktoEdit={this.state.booktoEdit}
          booktoEditId={this.state.booktoEditId}
          modalTitle={this.state.modalTitle}
          modal={this.state.modal}
          hideModal={this.hideModal}
          postBooks={this.postBooks}
          putBooks={this.putBooks} />
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <Button className="carousel-button" onClick={() => this.showModal('Create a Book')} >Create Book</Button>
        {this.state.books.length > 0 ?
          <BookCarousel
            setCarouselIndex={this.setCarouselIndex}
            carouselIndex={this.state.carouselIndex}
            showModal={this.showModal}
            books={this.state.books}
            deleteBooks={this.deleteBooks} />
          : <h3>No Books Found :(</h3>
        }
      </>
    )
  }
}

export default withAuth0(BestBooks);
