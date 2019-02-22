import React from 'react';
import { StylesContext } from '../../App';

/**
 * Generally, you'll want to keep like things together. Since the select + options
 * make for a single, multi-element component, we can do some simplifying to put
 * them in one file.
 */
export default function SelectVideo(props) {
  return (
    <StylesContext.Consumer>
      {styles => (
        <select
          className="vidSelect"
          // sending the youtube link so we don't need more than one handler
          onChange={e => props.choose(e.target.value)}
          // recommended over setting `selected`
          defaultValue={props.selected.youtube_link}
          style={styles.VideoMain.Select}
        >
          {props.videos.map(video => (
            <option key={video.youtube_link} value={video.youtube_link}>
              {video.name} by {video.artist}
            </option>
          ))}
        </select>
      )}
    </StylesContext.Consumer>
  );
}
