import React from 'react'
import logo from './logo.svg'
import Header from './components/layout/Header'
import Projects from './components/pages/Projects'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'

class App extends React.Component {
  componentDidMount(){
    document.title="Tim Lucca"
  }
  render(){
    return (
      <Router>
        <div className="Portfolio">
          <div className="container">
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Under Construction.
                </p>
              </header> 
              </React.Fragment>
            )} />
            <Route path='/projects/' component={Projects} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
