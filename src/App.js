import React from 'react';

import './App.css';
import Header from "./components/header/header";
import Fib from "./components/fib/fib";
import Footer from "./components/footer/footer";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentFibID: Math.floor(Math.random() * this.props.fibs.length)
        };
    }

    get currentFib() {
        return this.props.fibs[this.state.currentFibID].fib;
    }

    render() {
        return (
            <div className = "App" >
                <div className = "container" >
                    <Header 
                        heading = "Welcome to:"
                        description = "Select the button below and decide for yourself whether to believe the fib or not..." >
                    </Header>
                    <Fib text={this.currentFib} />
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;