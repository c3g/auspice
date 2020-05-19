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
    if (isExternal(this.props.url)) {
      const { url, children, ...rest } = this.props;
      return (
        <a href={url} {...rest}>
          {children}
        </a>
      );
    }

    return (
      <a href={this.props.url} onClick={this.onClick} className={this.props.className}>
        {this.props.children}
      </a>
    );
  }
}

function isExternal(url) {
  try {
    return new URL(url).hostname !== location.hostname;
  } catch(e) {}
  return false;
}

export default Link;
