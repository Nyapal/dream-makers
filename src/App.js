import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {parse} from 'query-string';
import './App.css';
import './stylesheets.css';

class YouTubeVideo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {videoId: '', value: ''}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({value: e.target.value})
    }
    handleSubmit(e) {
        e.preventDefault()
        this.setState({videoId: this.state.value})
        e.target.reset();
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
        <div className="search-container">
            <form className="search" onSubmit={this.handleSubmit} ref="form">
                <input type="text" placeholder="Enter Video URL" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
            <YouTube
                videoId={parse(this.state.videoId)['https://www.youtube.com/watch?v']}
                name={this.state.name}
                opts={opts}
                onReady={this._onReady}
            />
        </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

class About extends Component {
    render() {
        return (
            <div className="about">
                <h1> About Us </h1>
                <p> Why </p>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div className= "contact-form">
                <h2> Contact Us </h2>
                <form action="https://formspree.io/jazz2900@gmail.com" method="POST">
                    <textarea type="email" placeholder="Email" name="_replyto" rows="1" cols="50"/> <br/>  <br/>
                    <textarea type="text" placeholder="Message.." name="name" rows="6" cols="50"/> <br/>
                    <input type="submit" value="Send"/>
                </form>
            </div>
        )
    }
}

class Scope extends Component {
    render() {
        return (
            <div className= "scope">
                <h2> Title </h2>
                <p>

                </p>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>yparser</h1>
                <YouTubeVideo />
            </div>
        )
    }
}

{/* this is nya testing stuff*/ }

const AppRouter = () => (
  <Router>
    <div>
        <nav className="navbar">
            <Link to='/' className="navbar-link">Home</Link>
            <Link to='/about' className="navbar-link">About</Link>
            <Link to='/scope' className="navbar-link">Scope</Link>
            <Link to='/contact-us' className="navbar-link">Contact Us</Link>
        </nav>
            <Route path="/" exact component={App} />
            <Route path="/about/" component={About} />
            <Route path="/scope/" component={Scope} />
            <Route path="/contact-us/" component={Contact} />
    </div>
  </Router>
);

export default AppRouter;
