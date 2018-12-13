import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './routes/Login';
import SecureHome from './routes/Secure/Home';

function SecureRoutes({ match }) {
  return (
    <div>
      <Route path={`${match.url}/home`} component={SecureHome} exact />
    </div>
  )
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/secure" component={SecureRoutes} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
