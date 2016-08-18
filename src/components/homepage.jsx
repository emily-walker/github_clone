import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Navbar from './homepageComponents/navbar';
import Repos from './frontPageTableComponents/repos';
import People from './frontPageTableComponents/people'
import {Link} from 'react-router';

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
      <div>
        <Navbar/>
        <div className="container page-content">
          <div>
            <img id="org-avatar" src={this.state.NCData.avatar_url}/>
            <div className="header-table">
              <h1 className="org-name">{this.state.NCData.name}</h1>
              <span>
            <h3 className="org-header-meta">{this.state.NCData.location}</h3>
                </span>
              <span>
            <h3 className="org-header-meta">{this.state.NCData.blog}</h3>
                </span>
              <span>
            <h3 className="org-header-meta">{this.state.NCData.email}</h3>
              </span>
            </div>
          </div>
          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <Link to="/">Repositories</Link>
            </li>
            <li role="presentation">
              <Link to="/people">People</Link>
            </li>
          </ul>
          <div className="tab-content container">
            <div className="tab-pane active" id="repos">
              {this.props.children}
            </div>
            <div className="tab-pane" id="people">

            </div>
          </div>
        </div>
      </div>
    )
  }

});

export default Homepage;