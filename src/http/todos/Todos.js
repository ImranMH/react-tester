import React from 'react';
import PropTypes from 'prop-types';
export default class Todos extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      	<li>
      		<h3>Title: <span>{this.props.title}</span> </h3>
      		<p>Status {this.props.completed}</p>
      	</li>
    );
  }
}
