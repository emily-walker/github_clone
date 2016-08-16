import React from 'react';
import ReactDOM from 'react-dom';

const Homepage = React.createClass({

  render: function () {
    return (
      <div>
        <nav className="nav container">
          <div className="nav-left">
            <img className="octicon" src="../public/images/GitHub-Mark-32px.png"/>
            <p className="control">
              <input className="input" type="text" placeholder="Search GitHub"/>
            </p>
            <a className="nav-item" href="#">
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item" href="#">
              Pull requests
            </a>
            <a className="nav-item" href="#">
              Issues
            </a>
            <a className="nav-item" href="#">
              Gist
            </a>
          </div>

  <span className="nav-toggle">
    <span/>
    <span/>
    <span/>
  </span>

          <div className="nav-right nav-menu">

    <span className="nav-item">
      <a className="button">
        <span className="icon">
          <i className="fa fa-twitter"/>
        </span>
        <span>Tweet</span>
      </a>
      <a className="button is-primary" href="#">
        <span className="icon">
          <i className="fa fa-download"/>
        </span>
        <span>Download</span>
      </a>
    </span>
          </div>
        </nav>
        <div className="columns container">
          <div className="column is-two-thirds">
            First column
          </div>
          <div className="column is-one-third">
            Second column
          </div>
        </div>
      </div>

    )
  }

});

export default Homepage;