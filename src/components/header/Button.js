import React from 'react';

export default function Button(props) {
  const isSelected = props.select === props.window;
  return (
    <button
      className={isSelected ? 'button selectedButton' : 'button'}
      onClick={() => props.updateWindow(props.select)}
    >
      {props.text}
    </button>
  );
}
