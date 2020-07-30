import React from 'react';

/** Using functional component */
export function MessageFunctional() {
    return (
        <header className="App-message-container">
            <h4 className="App-message-heading">Message created using <code>Functional component:</code></h4>
            <span className="App-message">Hello World</span>
        </header>
    );
}
