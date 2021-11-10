import {Component} from 'react';

export default class CreateBookButton extends Component {

  render() {
    return (
      <button onClick={this.props.modalHandler}>Create Book</button>
    )
  }
}
