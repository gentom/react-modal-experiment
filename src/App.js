import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import ResponsiveModal from './component/ResponsiveModal';
import BulmaModal from './component/BulmaModal';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <Route component={AppRoute} />
        </div>
      </BrowserRouter>
    )
  }
}

const Menu = () => (
  <ul>
    <li><Link exact='true' to="/">ResponsiveModal</Link></li>
    <li><Link to="/bulma">BulmaModal</Link></li>
  </ul>
)

const AppRoute = (props) => (
  <Switch>
    <Route exact path="/" component={ResponsiveModal} />
    <Route path="/bulma" component={BulmaModal} /> 
  </Switch>
)

export default App;