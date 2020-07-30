import React from 'react';
import './App.css';
import {
  MessageFunctional,
  MessageComponent,
  MessageElement,
  MessagePureComponent
} from './message';

function App() {
  return (
    <div className="App">
      <MessageElement/>
      <MessageComponent/>
      <MessagePureComponent/>
      <MessageFunctional/>
    </div>
  );
}

export default App;
