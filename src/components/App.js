import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
class App extends React.Component {
  state = {
    language: 'english'
  };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    const { language } = this.state;
    return (
      <div className='ui container'>
        <div>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguageChange('english')}
          />
          <i
            className='flag nl'
            onClick={() => this.onLanguageChange('dutch')}
          />
        </div>
        {/* communicate the language property on state down to the Provider so the LanguageContext's 
        default values can be updated upon user interaction */}
        {/* Note: Each time you render out an instance of the LanguageContext Provider, 
        a new and separate 'pipe' of information/data gets created  */}
        <ColorContext.Provider value='red'>
          <LanguageContext.Provider value={language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
