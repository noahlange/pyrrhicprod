import React from 'react';
import { StylesContext } from '../../App';

/**
 * We can simplify this too. Since we're not using the individual button
 * components anywhere, it makes sense to lump them together.
 */
export default function Buttons(props) {
  return props.videos.map(video => {
    const { name, artist, youtube_link } = video;
    const isSelected = youtube_link === props.selected;
    return (
      <StylesContext.Consumer>
        {styles => (
          <button
            className={isSelected ? 'selectedButton button' : 'button'}
            style={styles.VideoMain.Button}
            onClick={() => props.choose(youtube_link)}
          >
            {name} <br /> by {artist}
          </button>
        )}
      </StylesContext.Consumer>
    );
  });
}
