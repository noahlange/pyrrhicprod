import React, { Component } from 'react';
import Player from './Player';
import Buttons from './Buttons';
import SelectVideo from './SelectVideo';
import { StylesContext } from '../../App';

/**
 * This is a great time to use a class component. there's a whole lot of stuff
 * that needs to be tracked. and since it's not relevant to the component's
 * ancestors, we should put our state here, for now.
 */
export default class VideoMain extends Component {
  state = {
    selected: this.props.selected,
    autoplay: 0
  };

  // we can condense these two functions by always passing in the youtube link
  // instead of the select's onChange event
  choose = yt => {
    const chosen = this.props.videos.find(video => video.youtube_link === yt);
    this.setState({ selected: chosen, autoplay: 1 });
  };

  render() {
    return (
      <StylesContext.Consumer>
        {styles => (
          <div className="row">
            <div
              className="col-sm-2 btn-group-vertical"
              style={styles.VideoMain.Buttons}
            >
              {this.props.version === 'mobile' ? (
                <div>
                  <p className="text-light">Select a Video</p>
                  <SelectVideo
                    videos={this.props.videos}
                    choose={this.choose}
                    selected={this.state.selected}
                  />
                </div>
              ) : (
                <Buttons
                  className="btn-group-vertical"
                  videos={this.props.videos}
                  choose={this.choose}
                  selected={this.state.selected}
                />
              )}
            </div>
            <div className="col-sm-10" style={styles.VideoMain.Player}>
              <Player
                video={this.state.selected}
                autoplay={this.state.autoplay}
              />
            </div>
          </div>
        )}
      </StylesContext.Consumer>
    );
  }
}
