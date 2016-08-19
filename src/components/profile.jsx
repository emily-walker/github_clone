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

      <div>
        <Navbar/>
        <div className="container">
          <div className="columns">
            <div className="column is-one-quarter">
              <img src={this.state.profileData.avatar_url}/>
              <h1>{this.state.profileData.name}</h1>
              <h2>{this.state.profileData.login}</h2>
              <h3>{this.state.profileData.location}</h3>
              <h3>Joined on {this.state.profileData.created_at}</h3>
              <h3>{this.state.profileData.followers} Followers</h3>
              <h3>{this.state.profileData.following} Following</h3>
              <h3>{this.state.profileData.following} Following</h3>
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