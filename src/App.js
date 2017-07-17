import React, { Component } from 'react';
import './App.css';
import {Header} from "./Header";
import {Footer} from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header
            heading="Welcome to:"
            description="Select the button below and decide for yourself whether to believe the fib or not..."
          >
          </Header>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
