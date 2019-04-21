import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render () {
    return (
      <div>Click!</div>
    )
  }
}

document.addEventListener('DOMContentLoader', () =>{
  ReactDOM.render (
    <Hello />,
    document.getElementById('hello')
  )
});