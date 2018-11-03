import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    test() {
        console.log('test')
    }


  render() {
        console.log('render')
    return (
        <div className="App">
            <div class="search">
                <h1>yparser</h1>
                <input></input><br></br>
                <button>Submit</button>
            </div>
            <div class="result">
                <h2>Video Title</h2>
                <p>text for video</p>
            </div>
        </div>
        );
    }
}

export default App;
