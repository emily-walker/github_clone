const React = require('react');
import axios from 'axios';
import Navbar from './homepageComponents/navbar';
import ProfileTable from './profileTable';
import {Router, Route, Link} from 'react-router';


const Profile = React.createClass({
  getInitialState: function () {
    return {
      loaded: false,
      profileData: []
    }
  },

  componentDidMount: function () {
    this.getProfileData();
  },

  getProfileData: function () {
    axios.get('https://northcoders-github-api.herokuapp.com/api/users/' + this.props.params.username)
      .then(function (response) {
        var profileData = response.data;
        this.setState({profileData: profileData});
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },

  render: function () {
    return (

      <div className="page">
        <Navbar/>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <img className="rounded-2"src={this.state.profileData.avatar_url}/>
              <div className="full-name">{this.state.profileData.name}</div>
              <div className="username">{this.state.profileData.login}</div>
              <ul className="vcard-details border-top border-gray-light py-3">
                <li className="vcard-detail py-1 css-truncate css-truncate-target">{this.state.profileData.location}</li>
                <li className="vcard-detail py-1 css-truncate css-truncate-target">Joined on {this.state.profileData.created_at}</li>
                </ul>
              <div className="vcard-stats border-top border-bottom border-gray-light mb-3 py-3">
              <h3>{this.state.profileData.followers} Followers</h3>
              <h3>{this.state.profileData.following} Following</h3>
              <h3>{this.state.profileData.following} Following</h3>
                </div>
            </div>
            <div className="column is-three-quarters">
              <ProfileTable user={this.props.params.username}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});


export default Profile;