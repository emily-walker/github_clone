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
    return (
        <table className="table table-hover">
          <tbody>
          {this.state.repoData.map((repo, index) => {
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

export default Repos;
