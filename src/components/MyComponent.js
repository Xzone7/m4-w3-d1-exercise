import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <input onChange={(e) => {this.setState({ input: e.target.value })}} type="text" />
      </div>
    );
  }
}
