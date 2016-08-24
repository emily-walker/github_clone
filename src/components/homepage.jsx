import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Router, Route, Link } from 'react-router'
import Navbar from './homepageComponents/navbar';
import Footer from './homepageComponents/footer';

const Homepage = React.createClass({

  getInitialState: function () {
    return {
      loaded: false,
      NCData: []
    }
  },

  componentDidMount: function () {
    this.getNCData();
  },

  getNCData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders')
      .then(function (response) {
        var NCData = response.data;
        this.setState({NCData: NCData});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },

  render: function () {
    return (
      <div className="page">
        <Navbar/>
        <div className="info">
          <div className="orghead page-content container">
            <img id="org-avatar" src={this.state.NCData.avatar_url}/>
            <div className="header-table">
              <h1 className="org-name">{this.state.NCData.name}</h1>
              <div className="metadata">
              <span>
                <span className="octicon octicon-location"></span>
            <h3 className="org-header-meta">{this.state.NCData.location}</h3>
                </span>
              <span>
            <h3 className="org-header-meta not-first-metadata">{this.state.NCData.blog}</h3>
                </span>
              <span>
            <h3 className="org-header-meta not-first-metadata">{this.state.NCData.email}</h3>
              </span>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="tabs-wrapper">
              <div className="tabs">
                <ul>
                  <li className="tab-nav"><Link to='/' className="nav active">Repositories</Link></li>
                  <li className="tab-nav"><Link to='/people'>People</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="homepage-table">
          <div className="tab-pane active" id="repos">
            {this.props.children}
          </div>
          <div className="tab-pane" id="people">
          </div>
        </div>
        <Footer/>
      </div>

    )
  }

});

export default Homepage;