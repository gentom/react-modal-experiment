import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import ResponsiveModal from './component/ResponsiveModal';
import BulmaModal from './component/BulmaModal';
import ExtendedResponsiveModal from './component/ExtendedResponsiveModal';
import BulmaModalV2 from './component/BulmaModalV2'

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
    <li><Link to="/extended">ExtendedResponsiveModal</Link></li>
    <li><Link to="/bulma">BulmaModal</Link></li>
    <li><Link to="/bulmav2">BulmaModalV2</Link></li>
  </ul>
)

const AppRoute = (props) => (
  <Switch>
    <Route exact path="/" component={ResponsiveModal} />
    <Route path="/extended" component={ExtendedResponsiveModal} />
    <Route path="/bulma" component={BulmaModal} /> 
    <Route path="/bulmav2" component={BulmaModalV2} /> 
  </Switch>
)

export default App;