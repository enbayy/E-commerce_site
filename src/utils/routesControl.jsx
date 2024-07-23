import RouteWithRedirections from '../routing/RouteWithRedirections';

const routesControl = (routes) => {
  return routes.map((route) => {
    if (route.isPrivate) {
      return {
        ...route,
        element: (
          <RouteWithRedirections path={route.path}>
            {route.element}
          </RouteWithRedirections>
        ),
      };
    }
    return route;
  });
};

export default routesControl;
