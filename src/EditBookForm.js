import {Component} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class EditBookForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.formTitle.value;
    const description = event.target.formDescription.value;
    const status = event.target.formStatus.value;
    const bookObj = {title, description, status};
    event.target.reset();
    this.props.putBooks(bookObj);
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="name" placeholder="Enter book title" defaultValue={this.props.booktoEdit.title} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="name" placeholder="Enter book description" defaultValue={this.props.booktoEdit.description} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control type="name" placeholder="Enter book status" defaultValue={this.props.booktoEdit.status} />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
};

export default EditBookForm;
