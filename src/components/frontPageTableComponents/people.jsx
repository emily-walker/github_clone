const React = require('react');
import axios from 'axios';
import {Router, Route, Link} from 'react-router'


const People = React.createClass({
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
      .catch(function (error) {
        console.log(error);
      })
  },

  render: function () {
    return (
      <div>
        <ul className="table-list">
          {this.state.memberData.map((member, index) => {
            return (
              <li key={index} className="table-list-item">
                <div className="table-list-cell member-info">
                  <img className="avatar member-list-avatar" src={member.avatar_url}/>
                  <div className="member-info-content member-username">
                    <Link key={member.login} to={'/users/' + member.login}>{member.login}</Link>
                  </div>
                </div>
                <div className="member-follow member-meta table-list-cell">
                <button type="button" className="btn follow-button">Follow</button>
                  </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

});


export default People;