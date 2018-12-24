import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { AuthorizedRoute } from './components/Authorized';
import Login from './routes/Login';
import Index from './routes/Index';
import Page404 from './routes/Error/Page404';
import SecureHome from './routes/Secure/Home';
import SecureSettings from './routes/Secure/Settings';

function SecureRoutes({ match }) {
  return (
    <Switch>
      <Redirect from={`${match.url}/`} to={`${match.url}/home`} exact />
      <AuthorizedRoute path={`${match.url}/home`} authority={['USER']} component={SecureHome} exact />
      <AuthorizedRoute path={`${match.url}/settings`} component={SecureSettings} exact />
      <Route component={Page404} />
    </Switch>
  )
}

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/secure" component={SecureRoutes} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
