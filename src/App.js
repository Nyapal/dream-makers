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
            <h1>Coming Soon...</h1>
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
                        <table width="100%">
                            <tr>
                                <td>
                                <h2> Nya </h2>
                                <img width="200px" src={require("./nya.jpeg")}/>
                                <p> Hometown: San Diego, California</p>
                                <p> Favorite Coding Language: Javascript</p>
                                <p> Fun Fact: Speaks 7 Languages</p>
                                </td>

                                <td>
                                <h2> KJ </h2>
                                <img width="200px" src={require("./kj2.png")}/>
                                <p> Hometown: Oakland, California</p>
                                <p> Favorite Coding Language: Python</p>
                                <p> Fun Fact: Believes we are all living in a simulation</p>
                                </td>

                                <td>
                                <h2> Jasmine </h2>
                                <img width="200px" src={require("./jasmine.jpeg")}/>
                                <p> Hometown: Gainesville, Florida</p>
                                <p> Favorite Coding Language: Javascript</p>
                                <p> Fun Fact: Plays the Piano</p>
                                </td>
                            </tr>
                        </table>
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
                    <h3> Notify Scope </h3>
                    <p>
                    Notify is a web-based app that allows end users to convert various forms of media into text to more efficiently consume information.

                    Our product combats information-overload and helps the user

                    Notify will soon feature two extensive web-applications </p>

                    <h3> Spoken Note: </h3>

                    <p>
                    'Function':
                    - takes audio input
                    - converts audio to word array using Google API
                    - uses "key words" and tone to indicate importance for note taking
                    </p>

                    <h3>Y-Parser </h3>

                    <p>

                    Function:
                    - extracts the subtitles from youtube videos
                    - compiles the array of words into a script
                    - then uses Machine Learning to summarize the video

                    </p>
                    <h3> Applied: </h3>
                    <p>
                    <ul>
                        <li> Teachers in class can automatically have notes from lecture </li>
                        <li> Quick Research: Being able to quikly siphon through key words </li>
                        <li> Students and researchers working under duress </li>
                    </ul>

                    </p>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>notify</h1>
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
                <Link to='/meet-the-team' className="navbar-link">Meet the Team</Link>
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
        <Route path="/meet-the-team/" component={About} />
        <Route path="/scope/" component={Scope} />
        <Route path="/contact-us/" component={Contact} />
        </div>
  </Router>
);

export default AppRouter;
