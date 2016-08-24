import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Sidebar from './sidebar';

const Repos = React.createClass({

  getInitialState: function () {
    return {
      loaded: false,
      repoData: []
    }
  },

  componentDidMount: function () {
    this.getRepoData();
  },

  getRepoData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders/repos')
      .then(function (response) {
        var repoData = response.data;
        this.setState({repoData: repoData});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },
  render: function () {
    return (
      <div>
      <div className="repoTableComponent">
          {this.state.repoData.map((repo, index) => {
            return (
              <div key={index} className="repo-list-item">
                <span className="repo-list-meta repo-name">{repo.name}</span>
                <span className="repo-list-meta repo-description">{repo.description}</span>
                <span className="repo-list-meta repo-date">Updated on {repo.updated_at}</span>
              </div>
            )
          })}
        </div >
        <Sidebar className="repoTableComponent"/>
        </div>
    )
  }

});

export default Repos;
