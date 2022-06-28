import React from 'react';
import ReactDOM from 'react-dom/client';
import MainView from './components/main-view/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main Component (will eventually use all others)
class MyFlixApplication extends React.Component {
  render() {
    return <MainView />;
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];
const root = ReactDOM.createRoot(container);

// Tell React to render your app in the root DOM element
root.render(React.createElement(MyFlixApplication));
