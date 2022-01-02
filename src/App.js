import React from 'react';

import Header from './Components/Header';
import State_data from './Components/State_data';
import World from './Components/World';
import India from './Components/India';


import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

class App extends React.Component {

  constructor() {
    super();
  }

  render() {

    return (
      
      <div className='container-fluid'>

        <Router>

          <Header />

          <Switch>

            <Route exact path="/">
              <India />
            </Route>

            <Route path="/India">
              <India />
            </Route>

            <Route path="/World">
              <World />
            </Route>

          </Switch>

        </Router>


      </div>

    )

  }

}

export default App;
