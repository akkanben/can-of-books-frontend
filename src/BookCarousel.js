import React from 'react';
import blankBook from './images/blankBook.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Delete from './Delete';
import EditButton from './EditButton';
import Container from 'react-bootstrap/Container';


class BookCarousel extends React.Component {

  render() {
    return (
      <>
        <Container slide="true">
          <Carousel activeIndex={this.props.carouselIndex} onSelect={(e) => this.props.setCarouselIndex(e)} >
            {this.props.books.map((book) => {
              return (
                <Carousel.Item id={book._id} >
                  <img
                    className="d-block w-100"
                    src={blankBook}
                    alt={book.title}
                  />
                  <Carousel.Caption>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                    {book.status ? <p>Read</p> : <p>Unread</p>}
                    <EditButton id={book._id} showModal={this.props.showModal} book={book} />
                    <Delete id={book._id} deleteBooks={this.props.deleteBooks} />
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
          </Carousel>
        </Container>
      </>
    )
  }
}

export default BookCarousel;
