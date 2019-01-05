import React, { Component } from 'react';
import Address from './Address';
import DeleteAllBtn from './DeleteAllBtn';

import store from './Redux/Store/index.js'
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Address></Address>
          <DeleteAllBtn  foo="bar传递测试"/>
        </div>
      </Provider>
    );
  }
}

export default App;
