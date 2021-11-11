import {Component} from 'react'
import Button from 'react-bootstrap/Button';

export default class EditButton extends Component {

  handleClick = () => {
    this.props.showModal('Edit Book Information', this.props.id, this.props.book);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>Edit Book</Button>
    )
  }
}
