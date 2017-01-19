require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="index">
          Página principal
        </div>
      </MuiThemeProvider>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
