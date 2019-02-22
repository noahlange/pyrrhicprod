import React from 'react';
import pyrrhicLogo from '../../img/header/pyrrhic_logo_white.png';
import { StylesContext } from '../../App';

// A simple component. This doesn't need to keep track of any internal state,
// so let's make it a function.
export default () => {
  return (
    <StylesContext.Consumer>
      {styles => (
        <div style={styles.loading.container}>
          <div className="pulse p-3">
            <img
              alt="Pyrrhic Productions logo."
              src={pyrrhicLogo}
              style={styles.loading.logo}
            />
            <br />
            <h4 className="text-light text-center"> Loading...</h4>
          </div>
        </div>
      )}
    </StylesContext.Consumer>
  );
};
