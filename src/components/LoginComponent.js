'use strict';

import React from 'react';

require('styles/Login.css');

class LoginComponent extends React.Component {


  render() {
    return (
      <div className="login-component">
        <input name="user-name" type="text" placeholder="Username"/>
        <input name="password" type="text" placeholder="Password"/>
      </div>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
