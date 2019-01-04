import React, { Component } from 'react';
import Address from './Address';

import store from './Redux/Store/index.js'
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Address></Address>
        </div>
      </Provider>
    );
  }
}

export default App;
