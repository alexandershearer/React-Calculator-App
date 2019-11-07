import React, { Component } from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'>
                {/*Row 1*/}
                <KeypadRow>

                </KeypadRow>
                {/*Row 2*/}
                <KeypadRow>

                </KeypadRow>
                {/*Row 3*/}
                <KeypadRow>

                </KeypadRow>
                {/*Row 4*/}
                <KeypadRow>

                </KeypadRow>
                {/*Row 5*/}
                <KeypadRow>

                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;