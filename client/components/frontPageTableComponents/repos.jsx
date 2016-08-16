import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
    var repoNodes = this.state.repoData.map(function (repo, index) {
      return <div>
        {repo.name}
        {repo.description}
        {repo.updated_at}
        {repo.language}
        {repo.stargazers_count}
        {repo.private}
        {repo.fork}
        {repo.html_url}
        </div>
    });
    return (
            <div>
              {repoNodes}
            </div>
    )
  }

});

export default Repos;
