import React from 'react';
import { Route } from 'react-router-dom';
import { RouteConfig } from '../types/index';

function RouteWithSubRoutes({ route }: { route: RouteConfig }) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default RouteWithSubRoutes;