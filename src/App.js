import React, { Component } from 'react';
import YouTube from 'react-youtube';
import {parse} from 'query-string';
import logo from './logo.svg';
import './App.css';
import './stylesheets.css';

class YouTubeVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {videoId: 'https://www.youtube.com/watch?v=MNNjzFvKawg', value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({videoId: this.state.value})
    }
    render() {
        const opts = {
            height: '360',
            width: '600',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: -1
            }
    };
    return (
        <div>
            <div className="search-container">
                <form className="search" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter Video URL" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
            <br/>
            <YouTube
                videoId={parse(this.state.videoId)['https://www.youtube.com/watch?v']}
                opts={opts}
                onReady={this._onReady}
            />
            {/* Render script here */}
            <div className="youtube">
                <h2>Video Title</h2>
                <p> Video Script </p>
            </div>
      </div>
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
                <br/>
                {/* YOUTUBE Component*/}
                    <div>
                        <YouTubeVideo />
                    </div>


                {/* FORMSPREE CONTACT US FORM */}
                <div className= "submission">
                <h2> Contact Us </h2>
                    <form action="https://formspree.io/jazz2900@gmail.com" method="POST">
                        <input type="email" placeholder="Email" name="_replyto"/> <br/>
                        <input type="text" placeholder="Message.." name="name"/> <br/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>

                {/* FOOTER */}
                <div className="footer">
                    <p>Dream-makers</p>
                </div>
            </div>
        )
    }
}

export default App;
