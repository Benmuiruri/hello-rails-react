/*eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

class HelloWorld extends React.Component {
  render() {
    return <>Greeting: {this.props.greeting}</>;
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};
export default HelloWorld;
