import React from 'react';
import Clock from '../../img/about/alexCLock.jpg';
import Alex from '../../img/about/alexStaffLogo.jpg';

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 text-center text-light">
          <h1 className="py-3">What We Do</h1>
          <img
            alt="A person sitting in front of a neon clock, with a large building in the background."
            className="img-fluid pb-3"
            src={Clock}
          />
          <p className="pt-2">
            Pyrrhic Productions is Jersey City, NJ's premier video production
            company, a part of Arts on the Hudson, Arts Nonprofit. Aside from
            providing quality commercial video content, we are dedicated to the
            cause of preserving Jersey City's art scene and creating content for
            budding artists to blossom. We are all artists ourselves, and are
            passionate about our art. Let's work together and make something
            great.
          </p>
        </div>
        <div className="col-sm-6 text-center text-light">
          <h1 className="py-3">Hit Us Up</h1>
          <img
            alt="A photograph of Alex Gurevich."
            className="img-fluid pb-3"
            src={Alex}
          />
          <p className="pt-2">
            Alex Gurevich is the Papacito Del Arte and head of Pyrrhic
            Productions.
          </p>
          <p>
            Reach out at{' '}
            <i style={{ color: '#FC7A3D' }}>Pyrrhicfilmproductions@gmail.com</i>
          </p>
        </div>
      </div>
    </div>
  );
}
