import React, { Component } from 'react';

/** Using `React.Component` */
export class MessageComponent extends Component {
    render() {
        return (
            <header className="App-message-container">
                <h4 className="App-message-heading">Message created using <code>React.Component:</code></h4>
                <span className="App-message">Hello World</span>
            </header>
        );
    }
}
