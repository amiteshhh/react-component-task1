import React, { Component } from 'react';

/** Using `React.createElement` */
export class MessageElement extends Component {
    render() {
        return React.createElement("header", {
            className: "App-message-container"
        }, React.createElement("h4", {
            className: "App-message-heading"
        }, "Message created using ", React.createElement("code", null, "React.Component:")),
            React.createElement("span", {
                className: "App-message"
            }, "Hello World"));
    }
}
