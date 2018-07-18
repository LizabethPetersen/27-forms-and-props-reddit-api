import React from 'react';
import { render as renderDom } from 'react-dom';
import App from './components/app/app';

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <App />
        <main>Search</main>
      </React.Fragment>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
renderDom(<Main />, root);
