import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// ******** Consumer approach fro getting data out of context object ********

class Button extends React.Component {
  renderSubmit(value) {
    return value === 'english' ? 'Submit' : 'Voorleggen';
  }
  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {/* when using a Consumer, we always pass a function as a child. The Consumer will 
            automatically call this function with the current value that is inside our pipe as it's first argument*/}
          {value => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

// ******** 'this.context' approach for getting data out of context object ********

// class Button extends React.Component {
//   // hookup LanguageContext object to Button class.
//   // contextType must be called 'contextType'.
//   // the keyword 'static' is used to add a property to a class. An alternative approach for adding the contextType property to
//   // Button could be to add 'Button.contextType = LanguageContext' to the end of the Button class declaration.
//   static contextType = LanguageContext;

//   render() {
//       // Simply use 'this.context' to access the data within the context object
//     const text = this.context === 'english' ? 'Submit' : 'Voorleggen';
//     return <button className='ui button primary'>{text}</button>;
//   }
// }

export default Button;
