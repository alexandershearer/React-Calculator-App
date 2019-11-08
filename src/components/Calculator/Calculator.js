import React, { Component } from 'react';
import './Calculator.css'
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

class Calculator extends Component {

/* Constructor function to set our initial state */
    constructor(props) {
        super(props);
        
        this.state = {
            equation: '',
            result: 0
        }
    }

    /* Function that is called when any of the keypad buttons are pressed */
    onButtonPress = (event) => {
        console.log("onButtonPress called");
    }

    render() {
        return(
            <div className="Calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </div>
        );
    }
}

export default Calculator; 