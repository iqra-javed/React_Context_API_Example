import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // hookup LanguageContext object to Button class.
  // contextType must be called 'contextType'.
  // the keyword 'static' is used to add a property to a class. An alternative approach for adding the contextType property to
  // Button could be to add 'Button.contextType = LanguageContext' to the end of the Button class declaration.
  static contextType = LanguageContext;

  render() {
    return <button className='ui button primary'>Submit</button>;
  }
}

export default Button;
