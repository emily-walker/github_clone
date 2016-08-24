import React from 'react';
import axios from 'axios';

const PersonRepos= React.createClass({

  getInitialState: function () {
    return {
      loaded: false,
      personRepoData: []
    }
  },

  componentDidMount: function () {
    this.getPersonRepoData();
  },

  getPersonRepoData: function (props) {
    axios.get('https://northcoders-github-api.herokuapp.com/api/users/' + this.props.user + '/repos')
      .then(function (response) {
        var personRepoData = response.data;
        console.log(this.props.user);
        this.setState({personRepoData: personRepoData});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },
  render: function () {
    return (
        <div className="repoTableComponent">
          {this.state.personRepoData.map((repo, index) => {
            return (
              <div key={index} className="repo-list-item">
                <span className="repo-list-meta repo-name">{repo.name}</span>
                <span className="repo-list-meta repo-description">{repo.description}</span>
                <span className="repo-list-meta repo-date">Updated on {repo.updated_at}</span>
              </div>
            )
          })}
        </div>
    )
  }


});

export default PersonRepos;