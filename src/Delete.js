import {Component} from 'react'
import Button from 'react-bootstrap/Button';

export default class Delete extends Component {

  handleClick = () => {
    this.props.deleteBooks(this.props.id, this.props.email);
  }

  render() {
    return (
        <Button onClick={this.handleClick}>Delete Book</Button>
    )
  }
}