/**
 * 路由
 */

import React from 'react';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import { AuthorizedRoute } from './components/Authorized';
import SecureLayout from './components/SecureLayout';
import Login from './routes/Login';
import Index from './routes/Index';
import Page404 from './routes/Error/Page404';
import SecureHome from './routes/Secure/Home';
import SecureSettings from './routes/Secure/Settings';
import SecureContractSearch from './routes/Secure/ContractSearch';
import SecureContractDeploy from './routes/Secure/ContractDeploy';
import SecureUserSearch from './routes/Secure/UserSearch';
import SecureUserAuth from './routes/Secure/UserAuth';

const { ConnectedRouter } = routerRedux;

function SecureRoutes({ match }) {
  return (
    <SecureLayout>
      <Switch>
        <Redirect from={`${match.url}/`} to={`${match.url}/home`} exact />
        <AuthorizedRoute path={`${match.url}/home`} component={SecureHome} authority={['USER']} exact />
        <AuthorizedRoute path={`${match.url}/settings`} component={SecureSettings} authority={['USER']} exact />
        <AuthorizedRoute path={`${match.url}/contract/search`} component={SecureContractSearch} authority={['USER']} exact />
        <AuthorizedRoute path={`${match.url}/contract/deploy`} component={SecureContractDeploy} authority={['USER']} exact />
        <AuthorizedRoute path={`${match.url}/user/search`} component={SecureUserSearch} authority={['USER']} exact />
        <AuthorizedRoute path={`${match.url}/user/auth`} component={SecureUserAuth} authority={['USER']} exact />
        <Route component={Page404} />
      </Switch>
    </SecureLayout>
  )
}

function RouterConfig({ history }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/secure" component={SecureRoutes} />
        <Route component={Page404} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
