import React, { Component } from 'react';
import './App.css';

// Components
import Navbar from './Components/Navbar'

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// routes
import routes from './routes';

class App extends Component {
  render() {
    let elmRoute = routes.map((route, index) => {
      return (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    })

    return (
      <Router>
        <div className="App">
          <h1>QUẢN LÝ KHÓA HỌC</h1>

          {/* Navbar */}
          <Navbar />

          {/* Page */}
          <Switch>
            {
              elmRoute
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
