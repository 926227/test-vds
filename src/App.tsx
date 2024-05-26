import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет Галя ;)
        </p>
        <a
          className="App-link"
          href="/strapi/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Админка
        </a>
      </header>
    </div>
  );
}

export default App;
