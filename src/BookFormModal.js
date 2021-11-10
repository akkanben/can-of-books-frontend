import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewBookForm from './NewBookForm';

class BookFormModal extends Component {

  render() {
    return (
      <Modal show={this.props.modal} onHide={this.props.hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Make a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <NewBookForm postBooks={this.props.postBooks} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default BookFormModal;
