import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store';

import AppRoutes from './src/Routes/app.routes'

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  );
};

export default App;