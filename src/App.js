import React, { Component } from 'react';
import { combineReducers, createStore } from 'redux';
import test from './reducers/test';

import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const reducer = combineReducers({ test });
const store = createStore(reducer);


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