import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';
import { rootStore } from './rootStore';

ReactDOM.render(
  <Provider store={rootStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
