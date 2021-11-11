import {Component} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import NewBookForm from './NewBookForm';
import EditBookForm from "./EditBookForm";

class BookFormModal extends Component {

  render() {
    return (
      <Modal show={this.props.modal} onHide={this.props.hideModal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{this.props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.modalTitle === 'Edit Book Information' ? <EditBookForm booktoEdit={this.props.booktoEdit}/> : <NewBookForm postBooks={this.props.postBooks} />}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  };
}

export default BookFormModal;
