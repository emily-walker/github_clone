import React from 'react';
import PersonRepos from './personComponents/personRepos';
import {Link} from 'react-router';

const ProfileTable= React.createClass({

  render: function () {
    return (
      <div>
        <ul className="nav nav-tabs person-repos" role="tablist">
          <li role="presentation"><Link to = "/repos">Repositories</Link></li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="repositories">
            <PersonRepos user={this.props.user}/>
          </div>
        </div>
      </div>
    )
  }

});

export default ProfileTable;

