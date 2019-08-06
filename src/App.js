import React from 'react';
import logo from './logo.svg';
import Header from './components/layout/Header'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="Portfolio">
        <div className="container">
          <Header />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Under Construction.
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
