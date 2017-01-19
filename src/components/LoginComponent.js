'use strict';
require('styles/Login.css');

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import GridList from 'material-ui/GridList';

const styles = {
  button: {
    margin: 12
  },
  gridList: {
    margin: '10px auto',
    width: '25%'
  }
};

class LoginComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="login-component">
          <GridList
            cols={1}
            cellHeight='auto'
            padding={10}
            style={styles.gridList}
          >
            <div>
              <input name="user-name" type="text" placeholder="Username"/>
            </div>
            <div>
              <input name="password" type="text" placeholder="Password"/>
            </div>
            <div>
              <RaisedButton label="Sign up" style={styles.button}/>
              <RaisedButton label="Sign in" primary={true} style={styles.button}/>
            </div>
          </GridList>
        </div>
      </MuiThemeProvider>
    );
  }
}

LoginComponent.displayName = 'LoginComponent';

// Uncomment properties you need
// LoginComponent.propTypes = {};
// LoginComponent.defaultProps = {};

export default LoginComponent;
