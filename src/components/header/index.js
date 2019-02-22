import React from 'react';
import vidProdJC from '../../img/header/vidProdJcNj2.png';
import AOTHlogo from '../../img/header/logo_gmail.jpg';
import pyrrhicLogo from '../../img/header/pyrrhic_logo_white.png';

import { StylesContext } from '../../App';
import Menu from './Menu';

export default function Header(props) {
  return (
    <div className="row">
      <StylesContext.Consumer>
        {styles => (
          <div>
            <div id="header" className="row">
              <div className="logo col-sm-3" style={styles.Header.images}>
                <a href="index.html">
                  <img
                    src={pyrrhicLogo}
                    style={styles.Header.image}
                    alt="Pyrrhic Productions logo."
                  />
                </a>
              </div>
              <div className="vidProdJC col-sm-7" style={styles.Header.images}>
                <img alt="" src={vidProdJC} style={styles.Header.image} />
              </div>
              <div
                className="links col-sm-2 text-center"
                style={styles.SocialMediaIcons}
              >
                <a
                  href="https://www.instagram.com/pyrrhicproductions/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-instagram fa-4x favicon-link"
                    style={styles.SocialMediaIcons}
                  />
                </a>
                <a
                  href="https://www.facebook.com/pyrrhicproductions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i
                    className="fa fa-facebook fa-4x favicon-link"
                    style={styles.SocialMediaIcons}
                  />
                </a>
                <a
                  href="https://artsonthehudson.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt="Arts on the Hudson logo"
                    src={AOTHlogo}
                    style={styles.SocialMediaIcons}
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </StylesContext.Consumer>
      <Menu updateWindow={props.updateWindow} window={props.window} />
    </div>
  );
}
