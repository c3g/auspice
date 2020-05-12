import React from "react";
import { connect } from "react-redux";
import { changePage } from "../../actions/navigation";

@connect(
  undefined,
  dispatch => ({
    changePage: path => dispatch(changePage(path))
  })
)
class Link extends React.Component {
  onClick = ev => {
    ev.preventDefault()
    this.props.changePage({ path: this.props.url })
  }
  render() {
    return (
      <a href={this.props.url} onClick={this.onClick} className={this.props.className}>
        {this.props.children}
      </a>
    );
  }
}

export default Link;
