import React from 'react';
import Button from './Button';
import { StylesContext } from '../../App';

export default function Menu(props) {
  const { updateWindow, window } = props;
  return (
    <StylesContext.Consumer>
      {styles => (
        <div className="container py-4">
          <div className="row">
            <div className="col-sm-6 text-center text-light">
              <Button
                text="Watch our Videos"
                styleObj={styles.VideoMain.Button}
                updateWindow={updateWindow}
                window={window}
                select={'video'}
              />
            </div>
            <div className="col-sm-6 text-center text-light">
              <Button
                text="About and Contact"
                styleObj={styles.VideoMain.Button}
                updateWindow={updateWindow}
                window={window}
                select={'about'}
              />
            </div>
          </div>
        </div>
      )}
    </StylesContext.Consumer>
  );
}
