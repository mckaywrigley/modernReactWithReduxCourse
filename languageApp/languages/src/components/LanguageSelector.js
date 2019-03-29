import React, { Component } from 'react'
import LanguageContext from '../contexts/LanguageContext';

export default class LanguageSelector extends Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div className="">
                        Select a language:
                        <i className="flag us" onClick={() => this.context.onLanguageChange('English')} />
                        <i className="flag nl" onClick={() => this.context.onLanguageChange('Dutch')} />
            </div>
        )
    }
}
