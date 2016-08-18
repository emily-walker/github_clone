import React from 'react';

const Navbar = React.createClass({

  render: function () {
    return (
      <nav className="nav site-header">
        <div className="nav-left">
          <img className="octicon" src="./images/GitHub-Mark-32px.png"/>
          <a className="left-end nav-item" href="#">
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
          <a className="nav-item secondary" href="#">
            Pricing
          </a>
          <a className="nav-item secondary" href="#">
            Blog
          </a>
          <a className="nav-item secondary" href="#">
            Support
          </a>
          <p className="control has-addons nav-item secondary">
            <input id= "input-label" className="input secondary" type="text" value="This organization"/>
            <input id="input" className="input secondary" type="text" placeholder="Search"/>
          </p>
          <button type="button" id= "sign-in-btn" className="btn btn-secondary nav-btn">Sign in</button>
          <button type="button" id= "sign-up-btn" className="btn btn-success nav-btn right-end">Sign up</button>
        </div>
        <span className="nav-toggle">
          <span/>
    <span/>
    <span/>
  </span>
      </nav>
    )
  }

});

export default Navbar;
