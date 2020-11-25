import React from 'react';
import { Provider } from 'react-redux';

import { App } from './src'
import { store } from './src/redux/store';

const Index: () => React$Node = () => {
  return (
    <Provider store={store}>
        <App/>
    </Provider>
  );
};

export default Index;
