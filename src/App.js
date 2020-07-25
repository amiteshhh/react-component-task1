import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <MessageElement></MessageElement>
      <MessageComponent></MessageComponent>
      <MessagePureComponent></MessagePureComponent>
      <MessageFunctional></MessageFunctional>
    </div>
  );
}

/** Using functional component */
function MessageFunctional() {
  return (
    <header className="App-message-container">
      <h4 className="App-message-heading">Message created using <code>Functional component:</code></h4>
      <span className="App-message">Hello World</span>
    </header>
  );
}

/** Using `React.Component` */
class MessageComponent extends React.Component {
  render() {
    return (
      <header className="App-message-container">
        <h4 className="App-message-heading">Message created using <code>React.Component:</code></h4>
        <span className="App-message">Hello World</span>
      </header>
    );
  }
}

/** Using `React.PureComponent` */
class MessagePureComponent extends React.PureComponent {
  render() {
    return (
      <header className="App-message-container">
        <h4 className="App-message-heading">Message created using <code>React.PureComponent:</code></h4>
        <span className="App-message">Hello World</span>
      </header>
    );
  }
}

/** Using `React.createElement` */
class MessageElement extends React.Component {

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

export default App;
