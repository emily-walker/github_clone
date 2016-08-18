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
      <table className="table table-hover">
        <tbody>
        {this.state.personRepoData.map((repo, index) => {
          return (
            <tr className="active" key={index} onClick={console.log()}>
              <td className="active tableItems">{repo.name}</td>
              <td className="active tableItems">{repo.description}</td>
              <td className="active tableItems">{repo.updated_at}</td>
              <td className="active tableItems">{repo.forks}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }

});

export default PersonRepos;