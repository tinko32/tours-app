import React from 'react';
import './button.css'

class Button extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button className="btn-primary" onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  } 

  export default Button;