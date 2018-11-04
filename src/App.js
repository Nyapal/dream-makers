import React, { Component } from 'react';
import YouTube from 'react-youtube';
import logo from './logo.svg';
import './App.css';
import './stylesheets.css';

class YouTubeVideo extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class App extends Component {
    render() {
        return (
            <div className="App">
            {/* TITLE VIDEO */}
            <h1>yparser</h1>
                <div class="search-container">
                    <form class="search">
                        <input></input><br></br>
                        <input type="submit"/>
                    </form>
            </div>
                {/* YOUTUBE Component */}
                <YouTubeVideo />
                {/* Render script here */}
                <div class="youtube">
                    <p class="result-container">
                        <h2>Video Title</h2>
                        <p>text for video</p>
                    </p>
                </div>

                {/* FORMSPREE CONTACT US FORM */}
                <div class= "submission">
                <h2> Contact Us </h2>
                    <form action="https://formspree.io/jazz2900@gmail.com" method="POST">
                        <input type="text" name="name"/>
                        <input type="email" name="_replyto"/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>

                {/* FOOTER */}
                <div class="footer">
                    <p>Dream-makers</p>
                </div>
            </div>
        )
    }
}

export default App;
