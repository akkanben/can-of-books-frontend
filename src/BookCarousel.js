import React from 'react';
import blankBook from './images/blankBook.png';
import Carousel from 'react-bootstrap/Carousel';

class BookCarousel extends React.Component {
  render() {
    return (
      <>
        <Carousel>
            {this.props.books.map(book => {
                return (
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={blankBook}
                        alt={book.title}
                    />
                    <Carousel.Caption>
                        <h2>{book.title}</h2>
                        <p>{book.description}</p>
                        <p>{book.status}</p>
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
