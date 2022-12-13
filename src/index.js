import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import moviesApp from './reducers/reducers';
import MainView from './components/main-view/main-view';
import './index.css';
// import reportWebVitals from './reportWebVitals';

// Initialize the store passing it the combined reducers
const store = createStore(moviesApp /*, devToolsEnhancer() */);

// Main Component (is passed the store, accessible to all tree)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];
const root = ReactDOM.createRoot(container);

// Tell React to render your app in the root DOM element
root.render(React.createElement(MyFlixApplication));
