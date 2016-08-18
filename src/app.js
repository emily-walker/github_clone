import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Homepage from './components/homepage.jsx';
import Profile from './components/profile.jsx';
import Repos from './components/frontPageTableComponents/repos';
import People from './components/frontPageTableComponents/people';


const App = React.createClass({

  render: function () {
    return (
      <div >
        <Homepage/>
      </div>
    );
  }
});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Homepage}>
      <IndexRoute component={Repos} />
      <Route path='/people' component={People} />
    </Route>
    <Route path='/users/:username' component={Profile} />
  </Router>
  , document.getElementById('app'));
