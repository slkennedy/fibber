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

        this.setCurrentFibID = this.setCurrentFibID.bind(this);
    }

    get currentFib() {
        return this.props.fibs[this.state.currentFibID];
    }

    setCurrentFibID() {
        this.setState((previousState, props) => {
            console.log(previousState);
            return {
                currentFibID: Math.floor(Math.random() * this.props.fibs.length)
            }
        });
    }

    render() {
        return (
            <div className = "App" >
                <div className = "container" >
                    <Header 
                        heading = "Welcome to:"
                        description = "Select the button below and decide for yourself whether to believe the fib or not..." >
                    </Header>
                    <Fib fib={this.currentFib} />
                    <button className="willow-button" onClick={this.setCurrentFibID}>See A New Fib</button>
                    <Footer></Footer>
                </div>
            </div>
        );
    }
}

export default App;