import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './stylesheets.css';

class App extends Component {
    test() {
        console.log('test')
    }


  render() {
        console.log('render')
    return (
    <div className="App">
        <div class= "submission">
            <form action="https://formspree.io/jazz2900@gmail.com" method="POST">
              <input type="text" name="name"/>
              <input type="email" name="_replyto"/>
              <input type="submit" value="Send"/>
            </form>
        </div>
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
            <p>Dream-makers</p>
        </div>
    </div>
        );
    }
}

export default App;
