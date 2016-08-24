import React from 'react';

const Footer = React.createClass({

  render: function () {
    return (
      <div className="site-footer">
      <ul class="site-footer-links">
    <li>© 2016 <span title="0.28590s from github-fe154-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
    <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
      <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
      <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
      <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
      </ul>>
      </div>
    )
  }

});

export default Footer;
