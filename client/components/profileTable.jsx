const Table= React.createClass({

  render: function () {
    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a></li>
          <li role="presentation"><a href="#repositories" aria-controls="repositories" role="tab" data-toggle="tab">Repositories</a></li>
          <li role="presentation"><a href="#Activity" aria-controls="activity" role="activity" data-toggle="activity">Activity</a></li>
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="overview">
            <Overview/>
          </div>
          <div role="tabpanel" className="tab-pane" id="people">
            <PersonRepos/>
          </div>
          <div role="tabpanel" className="tab-pane" id="people">
            <Activity/>
          </div>
        </div>

      </div>
    )
  }

});