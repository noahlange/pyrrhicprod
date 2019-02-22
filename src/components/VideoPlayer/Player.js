import React from 'react';

/**
 * This is a great usecase for a stateless functional component (SFC).
 * Since we're not setting any kind of state anywhere, but instead rendering
 * the same thing over and over again with different parameters, we can save
 * ourselves the effort of putting it in a class and just use a function.
 */
export default function Player(props) {
  const vid = `https://www.youtube.com/embed/${
    props.video.youtube_link
  }?autoplay=${props.autoplay}`;
  return (
    <iframe
      width="100%"
      height="100%"
      src={vid}
      frameBorder="0"
      // apparently we're supposed to have titles. the more you know.
      title={props.video.name}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
