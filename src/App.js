import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {parse} from 'query-string';
import Clarifai from 'clarifai'
import './App.css';
import './stylesheets.css';

const app = new Clarifai.App({
 apiKey: 'a9d3339605014e9ba0e1ce21b0cc3594'
});

// clarifai.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/beer.mp4', {video: true})
//   .then(log)
//   .catch(log);
// app.models.predict(Clarifai.GENERAL_MODEL, 'https://samples.clarifai.com/metro-north.jpg').then(
//   function(response) {
//     console.log(response);
//   },
//   function(err) {
//     console.error(err);
//   }
// );

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
    render(){
    console.log(<YouTube videoId/>)
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
                opts={opts}
                onReady={this._onReady}
            />
            <h1>Video Title</h1>
            <p>This is where the script will go: </p>
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
                <Navbar/>
                    <h1> About Us </h1>
                        <h6> Nya </h6>
                            <img src={require("./nya.jpeg")}/>
                            <p> Hometown: San Diego, California</p>
                            <p> Favorite Coding Language: Javascript</p>
                            <p> Fun Fact: Speaks 7 Languages</p>
                        <h6> KJ </h6>
                            <img src={require("./kj.jpeg")}/>
                            <p> Hometown: Oakland, California</p>
                            <p> Favorite Coding Language: Python</p>
                            <p> Fun Fact: Believes we are all living in a simulation</p>
                        <h6> Jasmine </h6>
                            <img src={require("./jasmine.jpeg")}/>
                            <p> Hometown: Gainesville, Florida</p>
                            <p> Favorite Coding Language: Javascript</p>
                            <p> Fun Fact: Plays the Piano</p>
            </div>
        )
    }
}

class Contact extends Component {
    render() {
        return (
            <div className= "contact-form">
                <Navbar/>
                <h1> Contact Us </h1>
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
                <Navbar/>
                <h1> Future Features </h1>
                <p> </p>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>yparser</h1>
                <Navbar/>
                <YouTubeVideo />
            </div>
        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <Link to='/' className="navbar-link">Home</Link>
                <Link to='/about' className="navbar-link">About</Link>
                <Link to='/scope' className="navbar-link">Scope</Link>
                <Link to='/contact-us' className="navbar-link">Contact Us</Link>
            </nav>
        )
    }
}

// const Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar">
//             <Link to='/' className="navbar-link">Home</Link>
//             <Link to='/about' className="navbar-link">About</Link>
//             <Link to='/scope' className="navbar-link">Scope</Link>
//             <Link to='/contact-us' className="navbar-link">Contact Us</Link>
//             </nav>
//         )
//     }
// }


const AppRouter = () => (
  <Router>
        <div>
        <Route path="/" exact component={App} />
        <Route path="/about/" component={About} />
        <Route path="/scope/" component={Scope} />
        <Route path="/contact-us/" component={Contact} />
        </div>
  </Router>
);

export default AppRouter;
