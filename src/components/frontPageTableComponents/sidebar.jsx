const React = require('react');
import axios from 'axios';
import {Router, Route, Link} from 'react-router'


const Sidebar = React.createClass({
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
      <div className="org-sidebar">
        <div className="simple-box">
          <Link to='/people' className="org-module-link">People</Link>
          <div className="member-avatar-group">
            {this.state.memberData.map((member, index) => {
              return (
                <Link key={member.login} to={'/users/' + member.login}><img className="avatar" src={member.avatar_url}/></Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

});


export default Sidebar;