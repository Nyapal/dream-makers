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
        <header>
            <div class="container">
                <h1 class="logo"></h1>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                <nav>
            </div>
        </header>
        <div class="body">
            <div class="search-container">
                <h1>yparser</h1>
                <form class="search">
                    <input></input><br></br>
                    <button>Submit</button>
                </form>
            </div>
            <div class="youtube"></div>
            <form class="result-container">
                <h2>Video Title</h2>
                <p>text for video</p>
            </form>
            <div class="footer">
                <ul>
                    <li>Dream-Makers</li>
                </ul>
            </div>
        </div>
    </div>
        );
    }
}

export default App;
