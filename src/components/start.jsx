import React from 'react';
import ReactDOM from 'react-dom';

const Start = React.createClass({

  render: function () {
    return (
      <div>
        <nav className="nav site-header">
            <div className="nav-left">
              <img className="octicon" src="../public/images/GitHub-Mark-32px.png"/>
              <a className="nav-item" href="#">
                Personal
              </a>
              <a className="nav-item" href="#">
                Open Source
              </a>
              <a className="nav-item" href="#">
                Business
              </a>
              <a className="nav-item" href="#">
                Explore 
              </a>
            </div>

            <div className="nav-right">
              <a className="nav-item" href="#">
                Pricing
              </a>
              <a className="nav-item" href="#">
                Blog
              </a>
              <a className="nav-item" href="#">
                Support
              </a>
              <p className="control nav-item">
                <input className="input" type="text" placeholder="Search GitHub"/>
              </p>
              <a className="btn">
                Sign in
              </a>
              <a className="btn">
                Sign up
              </a>
            </div>
        <span className="nav-toggle">
          <span/>
    <span/>
    <span/>
  </span>
        </nav>
        <div className="jumbotron jumbotron-home">
        </div>
      </div>

    )
  }

});

export default Start;