import React from 'react';
import blankBook from './images/blankBook.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Delete from './Delete';

class BookCarousel extends React.Component {
  render() {
    return (
      <>
        <Carousel>
            {this.props.books.map((book, index) => {
                return (
                    <Carousel.Item id={book._id}>
                    <img
                        className="d-block w-100"
                        src={blankBook}
                        alt={book.title}
                    />
                    <Carousel.Caption>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <p>{book.status}</p>
                        <Delete email={book.email} id={book._id} deleteBooks={this.props.deleteBooks}/>
                    </Carousel.Caption>
                </Carousel.Item>
                )
            })}
        </Carousel>
      </>
    )
  }
}

export default BookCarousel;
