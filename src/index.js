import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyle from './GlobalStyle'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
