const React = require('react');
import axios from 'axios';
import { Router, Route, Link } from 'react-router'


const People = React.createClass ({
  getInitialState: function () {
    return {
      loaded: false,
      memberData: []
    }
  },

  componentDidMount: function () {
    this.getMemberData();
  },

  getMemberData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/northcoders/members')
      .then(function (response) {
        var memberData = response.data;
        this.setState({memberData: memberData});
      }.bind(this))
      .catch(function(error) {
        console.log(error);
      })
  },

  render: function () {
    return (
      <div className='container-fluid' >
        <table className="table table-hover">
          <tbody>
          {this.state.memberData.map((member, index) => {
            return (
              <tr className="active" key={index} onClick={console.log()}>
                <td className="active tableItems">
                  <img src={member.avatar_url}/>
                </td>
                <td className="active tableItems">{member.login}</td>
                <td className="active tableItems">{member.type}</td>
              </tr>
            )
          })}
          </tbody>
        </table>
      </div>
    )
  }

});


export default People;