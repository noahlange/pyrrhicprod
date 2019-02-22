import React, { Component } from 'react';
import './App.css';

import VideoMain from './components/VideoPlayer/VideoMain';
import Header from './components/Header/index';
import AboutMain from './components/About';
import Loading from './components/Loading';

// this allows us to reuse styles throughout the application without needing
// to pass styles through each component
export const StylesContext = React.createContext({
  loading: {
    container: {
      backgroundColor: 'black',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    logo: {
      width: '70vw'
    }
  },
  SocialMediaIcons: {
    width: '7vh',
    height: '7vh',
    color: 'white',
    fontSize: '3em',
    marginRight: '.2em'
  },
  VideoMain: {
    Player: {
      width: '100%',
      height: '75vh'
    },
    Select: {
      backgroundColor: '#FC7A3D'
    },
    Buttons: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    Button: {
      color: 'white',
      backgroundColor: 'black',
      width: '100%',
      borderRadius: '.7em'
    }
  },
  Header: {
    images: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      height: '20vh'
    }
  }
});

export default class App extends Component {
  // we can set initial state with a class property
  state = {
    version: 'desktop',
    window: 'video',
    // an empty array saves us from having to do null checks elsewhere
    videos: [],
    loaded: false
  };

  // since functions are objects, we can assign functions to properties.
  // arrow functions are always bound to their context, so we don't have to
  // bind it elsewhere. this is a hotly-debated issue, but it's what I do.
  updateDimensions = () => {
    const width = window.innerWidth;
    const version = width < 560 ? 'desktop' : 'mobile';
    if (version !== this.state.version) {
      this.setState({ version });
    }
  };

  // ditto
  updateWindow = update => {
    this.setState({ window: update });
  };

  // async functions return promises and allow us to `await`
  // the results of promises within them.
  async componentDidMount() {
    const res = await fetch('https://natespilman.tech/pyrrhic');
    const data = await res.json();
    this.setState({ videos: data, loaded: true });
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  /**
   * Switches are an okay-for-now solution that'll work for small sites. as you
   * noted, you'll want to bring in react-router when you get above 3 routes or so
   */
  pages() {
    switch (this.state.window) {
      case 'video':
        return (
          <VideoMain
            version={this.state.version}
            videos={this.state.videos}
            selected={this.state.videos[0]}
          />
        );
      default:
        return <AboutMain />;
    }
  }

  /**
   * We can extract a good amount of duplicated code between routes and use it
   * to wrap our changing content.
   */
  render() {
    // since we set `videos` and `loaded` at the same time,
    // we don't have to worry about checking both.
    return this.state.loaded ? (
      <div id="App" className="container-fluid">
        <Header updateWindow={this.updateWindow} window={this.state.window} />
        {this.pages()}
      </div>
    ) : (
      <Loading />
    );
  }
}
