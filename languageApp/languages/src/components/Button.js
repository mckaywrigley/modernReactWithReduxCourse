import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

export default class Button extends Component {
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === 'English' ? 'Submit' : 'Voorleggen';
        return (
            <ColorContext.Consumer>
                {color => 
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {value => value === 'English' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        )
    }
};

