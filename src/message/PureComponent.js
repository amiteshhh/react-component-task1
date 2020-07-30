import React, { PureComponent } from 'react';

/** Using `React.PureComponent` */
export class MessagePureComponent extends PureComponent {
    render() {
        return (
            <header className="App-message-container">
                <h4 className="App-message-heading">Message created using <code>React.PureComponent:</code></h4>
                <span className="App-message">Hello World</span>
            </header>
        );
    }
}
