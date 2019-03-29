import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageContext from './contexts/LanguageContext';
import ColorContext from './contexts/ColorContext';

class App extends React.Component {
    state = { language: 'English' }

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container">
                <div className="">
                    Select a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('English')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('Dutch')} />
                </div>
                {this.state.language}
                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language} >
                        <UserCreate />  
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    };
}

export default App;